import * as React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [metricFrom, setMetricFrom] = useState("");
  const [metricTo, setMetricTo] = useState("");

  const convertTemp = (input: any, metricFrom: any, metricTo: any) => {
    if (metricFrom == "Celcius" && metricTo == "Farenheit") {
      const output = (input * 9) / 5 + 32;
      setOutput(output + " Farenheit");
    } else if (metricFrom == "Celcius" && metricTo == "Kelvin") {
      const output = input + 273.15;
      setOutput(output + " Kelvin");
    } else if (metricFrom == "Farenheit" && metricTo == "Celcius") {
      const output = ((input - 32) * 5) / 9;
      setOutput(output + "  Celsius");
    } else if (metricFrom == "Farenheit" && metricTo == "Kelvin") {
      const output = ((input - 32) * 5) / 9 + 273.15;
      setOutput(output + "  Kelvin");
    } else if (metricFrom == "Kelvin" && metricTo == "Celcius") {
      const output = input - 273.15;
      setOutput(output + "  Celsius");
    } else if (metricFrom == "Kelvin" && metricTo == "Farenheit") {
      const output = ((input - 273.15) * 9) / 5 + 32;
      setOutput(output + "  Farenheit");
    } else if (metricFrom == "" || metricTo == "") {
      setOutput("Please select a metric");
    }
  };

  const handleClick = () => {
    if (input == "") return;
    convertTemp(input, metricFrom, metricTo);
  };

  const handleDropdownChange = () => {
    const a = document.getElementById("metricValue");
    const b = a?.innerText;
    if (b == null) return;
    setMetricFrom(b);
  };

  const handleDropdownChange2 = () => {
    const a = document.getElementById("metricValue1");
    const b = a?.innerText;
    if (b == null) return;
    setMetricTo(b);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Temperature Converter</CardTitle>
        <CardDescription>Convert Temperature</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="input">Input</Label>
              <Input
                type="number"
                required
                id="input"
                placeholder="Number to convert"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="metric">Metric from</Label>
              <Select required onValueChange={handleDropdownChange}>
                <SelectTrigger id="metricValue">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="celcius">Celcius</SelectItem>
                  <SelectItem value="farenheit">Farenheit</SelectItem>
                  <SelectItem value="kelvin">Kelvin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="metric1">Metric to</Label>
              <Select required onValueChange={handleDropdownChange2}>
                <SelectTrigger id="metricValue1">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="celcius1">Celcius</SelectItem>
                  <SelectItem value="farenheit1">Farenheit</SelectItem>
                  <SelectItem value="kelvin1">Kelvin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="output">Output</Label>
              <Input
                placeholder="Output will be displayed here"
                value={output}
                id="output"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button onClick={handleClick}>Convert</Button>
      </CardFooter>
    </Card>
  );
}
