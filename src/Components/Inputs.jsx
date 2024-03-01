import { useContext, useEffect, useRef, useState } from "react";
import { InputContext } from "../Components/InputContextProvider";
import { TableContext } from "./TableContextProvider";
import $ from 'jquery';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.full.min';


export function TextBox({ Id, Label, Value = "", Placeholder, Required, Width = 250, Filter }) {
    const { InputValues, SetInputValueChange } = useContext(InputContext);
    // eslint-disable-next-line
    useEffect(() => SetInputValueChange(Id, Value), []);

    return (
        <div className={Filter ? "form-group Rfilter" : "form-group"}>
            <label htmlFor={Id}>
                {Label}{Required ? <span style={{ color: "red" }}> *</span> : ""}
            </label>
            <input
                id={Id}
                name={Id}
                type="text"
                style={{ width: Width }}
                className="form-control"
                placeholder={Placeholder}
                value={InputValues[Id] !== undefined ? InputValues[Id] : Value} // Use Value as the default value
                onChange={e => SetInputValueChange(Id, e.target.value)}
            />
        </div>
    );
}
export function CheckBox({ Id, Label, Value = false, Placeholder, Required, Width = 250 }) {
    const { InputValues, SetInputValueChange } = useContext(InputContext);
    // eslint-disable-next-line
    useEffect(e => SetInputValueChange(Id, Value), [])

    return (
        <div className="form-group">
            <div className="icheck-primary d-inline">
                <input
                    type="checkbox"
                    id={Id}
                    defaultValue={InputValues[Id] !== undefined ? InputValues[Id] : Value}
                    name={Id}
                    onChange={e => SetInputValueChange(Id, e.target.checked)}
                    checked={InputValues[Id] !== undefined ? InputValues[Id] : Value}
                />
                <input
                    type="hidden"
                    defaultValue={InputValues[Id] !== undefined ? InputValues[Id] : Value}
                    id={Id}
                    name={Id}
                />
                <label htmlFor={Id}>{Label} {Required ? <span style={{ color: "red" }}> *</span> : ""}</label>
            </div>
        </div>

    );
}
export function Button({ Id, Label, Value, ClassName = "btn-primary", OnClick }) {
    return (
        <button
            id={Id}
            type="button"
            value={Value}
            onClick={OnClick}
            className={"btn " + ClassName + " mr-3"}
        >
            {Label}
        </button>

    );
}
export function FilterButton({ Id = "FilterSearchButton", Label = "Search", Value = "Update", ClassName = "btn-primary", OnClick }) {
    const { setCurrentPage } = useContext(TableContext);

    return (
        <div className="form-group Rfilter">
            <label>&nbsp;</label>
            <div className="input-group">
                <button
                    type="submit"
                    id={Id}
                    className={"btn " + ClassName}
                    value={Value}
                    onClick={() => { setCurrentPage(1); OnClick(); }}>
                    {Label}
                </button>
            </div>
        </div>
    );
}


// export const Select2Dropdown = ({ Label="Label",Id,Value="", options, onChange }) => {
//     const { InputValues, SetInputValueChange } = useContext(InputContext);
//     useEffect(() => {
//         SetInputValueChange(Id, Value);
//         $('select').select2({}); // Initialize Select2
//             // eslint-disable-next-line
//     }, []);

//     return (
//         <div className="form-group">
//             <label htmlFor="ContactType">{Label}</label>
//             <div className="input-group">
//                 <select style={{ width: "250px" }}  onChange={e => {console.log("test");SetInputValueChange(Id, e.target.value);}} >
//                     {options.map((option, index) => (
//                         <option key={index} value={option.value}>{option.label}</option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// };

export const Select2Dropdown = ({ label = "Label", Id, value = "", options, onChange }) => {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleChange = (e) => {
        const selectedVal = e.target.value;
        console.log("Selected Value:", selectedVal);
        setSelectedValue(selectedVal);
        onChange(Id, selectedVal);
    };
    
    useEffect(() => {
        console.log("Initializing Select2 for ID:", Id);
        $('#' + Id).select2(); // Initialize Select2
    }, [Id]);
    
    return (
        <div className="form-group">
            <label htmlFor={Id}>{label}</label>
            <div className="input-group">
                <select
                    id={Id}
                    style={{ width: "250px" }}
                    value={selectedValue}
                    update={handleChange}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
