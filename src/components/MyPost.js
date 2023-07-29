import React, { useState } from 'react';

const MyPost = () => {
    const [text, setText] = useState("");
    const [resultText, setResultText] = useState("");

    const clearText = () => {
        setText("");
        setResultText("");
    };

    const getResultText = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text }),
        };
        fetch("/sentiment", requestOptions)
            .then((res) => res.json())
            .then((data) => setResultText(data.sentiment_label))
            .catch((err) => {
                console.log("Something went wrong NASA!");
                console.error(err);
            });
    };

    return (
        <article>
            <h2>POST request</h2>
            <form onSubmit={getResultText}>
                <div>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter a sentence..."
                    />
                </div>
                <div>
                    <button type="submit">Check sentiment</button>
                </div>
                <div>
                    <button type="button" onClick={clearText}>Clear</button>
                </div>
            </form>
            <p>{resultText}</p>
        </article>
    );
};

export default MyPost;