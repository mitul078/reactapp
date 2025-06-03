import './styles/adminPage.css'
import { useState } from 'react'
import { useEffect } from 'react';
const AdminPanal = () => {

    useEffect(() => {
        const storedProducts = localStorage.getItem("productData");
        if (storedProducts) {
            try {
                const parsedData = JSON.parse(storedProducts);
                setProducts(parsedData);
            } catch (error) {
                console.error("Failed to parse productData from localStorage:", error);
            }
        }
    }, []);


    const [activeView, setactiveView] = useState("list");
    const [products, setProducts] = useState([]);
    const [form, setform] = useState({
        productName: "",
        productSize: "",
        productDescription: "",
        productPrice: "",
        productCategory: "",
        productImages: [""],
    })
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }
    const handleImageChange = (index, value) => {
        const newImages = [...form.productImages];
        newImages[index] = value;
        setform({ ...form, productImages: newImages });
    };
    const addImageField = () => {
        setform({ ...form, productImages: [...form.productImages, ""] });
    };
    const removeImageField = (index) => {
        const newImages = form.productImages.filter((_, i) => i !== index);
        setform({ ...form, productImages: newImages });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            productName: form.productName,
            productSize: form.productSize,
            productDescription: form.productDescription,
            productPrice: form.productPrice,
            productCategory: form.productCategory,
            productImages: form.productImages.filter((img) => img !== ""),
        };
        const existingData = JSON.parse(localStorage.getItem('productData')) || [];
        const newData = [...existingData, data]
        localStorage.setItem('productData', JSON.stringify(newData))
        setProducts((prev) => [...prev, data]);

        alert("✅ Product added successfully!");
        setform({
            productName: "",
            productSize: "",
            productDescription: "",
            productPrice: "",
            productCategory: "",
            productImages: [""],
        });

    }
    const handleRemove = (indexToRemove) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            const updatedProducts = products.filter((_, index) => index !== indexToRemove);
            setProducts(updatedProducts);
            localStorage.setItem('productData', JSON.stringify(updatedProducts));
        }
    };

    return (
        <div>
            <div className="adminPage w-[100%] h-screen">
                <div className="container">
                    <div className="leftPanal">
                        <button onClick={() => setactiveView('list')}> List All Product</button>
                        <button onClick={() => setactiveView('add')}> Add Product</button>
                        <button onClick={() => setactiveView("orders")}>Orders</button>
                        <button onClick={() => setactiveView("users")}>Users</button>
                    </div>
                    <div className="rightPanal bg-gray-800">
                        {activeView === 'list' && (
                            <div className='data'>
                                <h2 className="text-2xl font-bold mb-4 text-yellow-600">🧾 All Products</h2>
                                {products.length === 0 ? (
                                    <p className="text-gray-500">No products added yet.</p>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {products.map((product, index) => (
                                            <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                                                <h3 className="text-lg font-semibold text-yellow-700">{product.productName}</h3>
                                                <p className="text-sm text-gray-500 mt-1">Category: {product.productCategory}</p>
                                                <p className="text-sm text-gray-600 mt-2">{product.productDescription}</p>
                                                <p className="text-sm text-black mt-1">Size: {product.productSize}</p>
                                                <p className="font-bold text-green-700 mt-2">₹{product.productPrice}</p>

                                                <div className="flex overflow-x-auto gap-2 mt-3">
                                                    {product.productImages.map((img, i) => (
                                                        <img
                                                            key={i}
                                                            src={img}
                                                            alt={`img-${i}`}
                                                            className="h-20 w-20 object-cover rounded-md border"
                                                        />
                                                    ))}
                                                </div>

                                                <button
                                                    onClick={() => handleRemove(index)}
                                                    className="mt-3 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                                >
                                                    🗑️ Remove Product
                                                </button>
                                            </div>
                                        ))}

                                    </div>
                                )}
                            </div>
                        )}

                        {activeView === 'add' && (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="productName"
                                    placeholder="Product Name"
                                    value={form.productName}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-yellow-600"
                                    required
                                />
                                <input
                                    type="text"
                                    name="productSize"
                                    placeholder="Product Size (e.g., 12x12x20 inches)"
                                    value={form.productSize}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-yellow-600"
                                    required
                                />
                                <textarea
                                    name="productDescription"
                                    placeholder="Product Description"
                                    value={form.productDescription}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-yellow-600"
                                    required
                                ></textarea>
                                <input
                                    type="number"
                                    name="productPrice"
                                    placeholder="Product Price (INR)"
                                    value={form.productPrice}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-yellow-600"
                                    required
                                />
                                <select
                                    name="productCategory"
                                    value={form.productCategory}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 text-yellow-600"
                                >
                                    <option value="">Select Product Category</option>
                                    <option value="Temple">Temple</option>
                                    <option value="Mandir">Mandir</option>
                                    <option value="Wall Temple">Wall Temple</option>
                                    <option value="Wooden Craft">Wooden Craft</option>
                                    <option value="Other">Other</option>
                                </select>
                                <div>
                                    <label className="font-semibold text-gray-700 block mb-2 text-yellow-600">Product Images (URLs)</label>
                                    {form.productImages.map((url, index) => (
                                        <div key={index} className="flex items-center gap-2 mb-2 text-yellow-600">
                                            <input
                                                type="url"
                                                placeholder={`Image URL ${index + 1}`}
                                                value={url}
                                                onChange={(e) => handleImageChange(index, e.target.value)}
                                                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-yellow-600"
                                                required
                                            />
                                            {form.productImages.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeImageField(index)}
                                                    className="text-red-500 font-bold text-4xl"
                                                >
                                                    &times;
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={addImageField}
                                        className="a bg-zinc-300  text-green-900 rounded-md hover:bg-yellow-600 transition"
                                    >
                                        + Add More Images
                                    </button>
                                </div>
                                <div className="overflow-x-auto whitespace-nowrap mt-4">
                                    {form.productImages.map(
                                        (url, idx) =>
                                            url && (
                                                <img
                                                    key={idx}
                                                    src={url}
                                                    alt={`Product ${idx + 1}`}
                                                    className="inline-block h-28 w-28 object-cover rounded-md border mr-2"
                                                />
                                            )
                                    )}
                                </div>
                                <button className='btn' type="submit">
                                    Add Product
                                </button>

                            </form>

                        )}
                        {activeView === 'orders' && (
                            <div>
                                <h1>Orders</h1>
                            </div>
                        )}
                        {activeView === 'users' && (
                            <div>
                                <h1>USers</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanal
