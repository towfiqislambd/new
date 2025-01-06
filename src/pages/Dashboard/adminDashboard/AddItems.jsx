import SectionTitle from "../../../reuseableComponents/SectionTitle";
import { MdFilterList } from "react-icons/md";

const AddItems = () => {
    return (
        <div>
            <SectionTitle heading='Add an Item' subHeading="What's New"></SectionTitle>
            <form className="sm:py-10 py-8 px-5 sm:px-14 mx-auto space-y-3 bg-slate-200 rounded">
                <div>
                    <div className="label">
                        <span className="label-text text-lg">Recipe Name<span className="text-error text-lg">*</span></span>
                    </div>
                    <input name="recipeName" type="text" placeholder="Recipe Name" className="input input-bordered w-full" />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Category<span className="text-error text-lg">*</span></span>
                        </div>
                        <select name="category" className="select select-bordered w-full">
                            <option value='Category'>Category</option>
                            <option value="1">Person</option>
                            <option value="2">Person</option>
                            <option value="3">Person</option>
                            <option value="4">Person</option>
                            <option value="5">Person</option>
                        </select>
                    </div>
                    <div>
                        <div className="label">
                            <span className="label-text text-lg">Price<span className="text-error text-lg">*</span></span>
                        </div>
                        <input name="price" type="number" placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="pb-1">
                    <div className="label">
                        <span className="label-text text-lg">Recipe Details<span className="text-error text-lg">*</span></span>
                    </div>
                    <textarea name="recipeDetails" className="textarea rounded w-full" placeholder="Recipe Details....." rows={5}>
                    </textarea>
                </div>
                <input type="file" />
                <button type="submit" className="flex gap-2 items-center text-white bg-yellow-700 rounded px-7 py-3 font-medium">Add Item<MdFilterList className="text-lg" /></button>
            </form>
        </div>
    )
}

export default AddItems;