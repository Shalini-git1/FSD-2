import { useState } from "react";
import questions from "../data/questions";

function Quiz() {
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleOption = (option) => {
        if (option === questions[current].answer) {
            setScore(score + 1);
        }

        const next = current + 1;

        if (next < questions.length) {
            setCurrent(next);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div style={{ textAlign: "center" }}>
            {showResult ? (
                <h2>
                    Your Score: {score} / {questions.length}
                </h2>
            ) : (
                <>
                    <h2>{questions[current].question}</h2>

                    {questions[current].options.map((opt, index) => (
                        <button
                            key={index}
                            onClick={() => handleOption(opt)}
                            style={{
                                display: "block",
                                margin: "10px auto",
                                padding: "10px 20px"
                            }}
                        >
                            {opt}
                        </button>
                    ))}
                </>
            )}
        </div>
    );
}

export default Quiz;
