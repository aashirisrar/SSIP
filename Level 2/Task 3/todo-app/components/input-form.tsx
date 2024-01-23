"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Checkbox } from "./ui/checkbox"

const InputForm = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([""]);
    const [completed, setCompleted] = useState([""]);

    const handleClick = () => {
        if (input == "") return;
        if (output[0] == "") {
            const newOut = [input];
            console.log(newOut);
            setOutput(newOut);
            setInput("");
            return;
        }
        const newOut = [...output, input];
        console.log(newOut);
        setOutput(newOut);
        setInput("");
    }

    const handleChange = (e: boolean | string, key1: string) => {
        if (e == true) {
            const newO = [...completed, key1];
            setCompleted(newO);

            // add logic for completed
            const ind = output.indexOf(key1);
            output.splice(ind, 1);
        }

    }


    return (
        <>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <div>
                    <h1 className="text-center text-2xl font-bold" >To Do App</h1>
                </div>
                <Label htmlFor="email">Enter something:</Label>
                <div className="flex w-full max-w-sm items-center space-x-2 mt-2">
                    <Input type="string" placeholder="Input" value={input} onChange={(e) => { setInput(e.target.value) }} />
                    <Button onClick={handleClick}>Add</Button>
                </div>
            </div>
            <div className="flex justify-center gap-4 w-full max-w-lg">
                <div className="bg-[#1c1d1f] text-white p-4 rounded-lg w-full">
                    <div> To Do:</div>
                    {output[0] == "" ? <></> :
                        output.map((a) => (
                            <div className="flex w-full justify-between items-center mt-2 gap-4" key={a}>
                                <div className="overflow-hidden">{a}</div>
                                <Checkbox onCheckedChange={(e) => handleChange(e, a)} />
                            </div>
                        ))
                    }
                </div>
                <div className="bg-[#1c1d1f] text-white p-4 rounded-lg w-full">
                    <div> Completed:</div>
                    {
                        completed.map((a) => (
                            <div className="flex w-full justify-between items-center mt-2 gap-4" key={a}>
                                <div className="overflow-hidden">{a}</div>
                            </div>
                        ))
                    }

                </div>
            </div >
        </>
    )
}

export default InputForm