import react, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [{
    label: 'Afrikaans',
    value: 'af'
},
{
    label: 'Arabic',
    value: 'ar'
},
{
    label: 'Hindi',
    value: 'hi'
}]

const label = "Select a Language";

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');


    return (

        <div>
            <div>
                <label>
                    Enter Text :
                </label>
                <input value={text} onChange={(event) => setText(event.target.value)} />
            </div>
            <Dropdown selected={language} label={label} onSelectedChange={setLanguage} options={options} />

        </div>
    )

}

export default Translate;