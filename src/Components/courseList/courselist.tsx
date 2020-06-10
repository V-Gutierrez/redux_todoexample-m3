import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

interface state {
    data: string[];
}

export default function CourseList() {
    const [input, setInput] = useState<string>();
    const courses = useSelector((state: state) => state.data);
    const dispatch = useDispatch();

    function addCourse(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch({ type: 'ADD_COURSE', title: input });
        setInput('');
    }

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    return (
        <>
            <ul>
                <h1>List</h1>
                {courses.map((item: any) => (
                    <li>{item}</li>
                ))}
            </ul>
            <form onSubmit={addCourse}>
                <input
                    value={input}
                    onChange={handleInput}
                    type="text"
                    name=""
                    id=""
                />
            </form>
        </>
    );
}
