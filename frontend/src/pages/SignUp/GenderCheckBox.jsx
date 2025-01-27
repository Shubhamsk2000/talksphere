
const GenderCheckBox = () => {
    return (
        <div className="flex gap-3">
            <div className="form-control">
                <label className="gap-2 cursor-pointer label">
                    <span className="label-text">Male</span>
                    <input type="checkbox" defaultChecked={false} className="checkbox" />
                </label>
            </div>
            <div className="form-control">
                <label className="gap-2 cursor-pointer label">
                    <span className="label-text">Female</span>
                    <input type="checkbox" defaultChecked={false} className="checkbox" />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckBox
