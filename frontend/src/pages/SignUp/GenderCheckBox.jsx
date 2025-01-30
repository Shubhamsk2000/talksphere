
const GenderCheckBox = ({ handleGenderChange, selectedGender }) => {
    return (
        <div className="flex gap-3">
            <div className="form-control">
                <label className={`gap-2 cursor-pointer label ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox"
                        checked={selectedGender === "male"}
                        onChange={() => handleGenderChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`gap-2 cursor-pointer label ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox"
                        checked={selectedGender === "female"}
                        onChange={() => handleGenderChange("female")}
                    />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
