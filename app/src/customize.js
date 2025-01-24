import React, { useState } from "react";
import "./customize.css";
import './main';
import './main.css'
import { Navbar } from './main';


const Customize = () => {
  const [formData, setFormData] = useState({
    flavor: "",
    size: "",
    frosting: "",
    referenceImage: null,
    otherDetails: "",
    deliveryDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, referenceImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
    alert("Your custom order has been added to the cart!");
  };

  return (
    <div className="customize-page">
      <form className="customize-form" onSubmit={handleSubmit}>
        <h2>Customize Your Cake</h2>
        
        {/* Flavor */}
        <label htmlFor="flavor">Flavor:</label>
        <select
          id="flavor"
          name="flavor"
          value={formData.flavor}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select a flavor</option>
          <option value="vanilla">Vanilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="red-velvet">Red Velvet</option>
          <option value="strawberry">Strawberry</option>
          <option value="custom">Custom</option>
        </select>

        {/* Size */}
        <label htmlFor="size">Size (in pounds):</label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select size</option>
          <option value="1-pound">1 Pound</option>
          <option value="2-pound">2 Pounds</option>
          <option value="3-pound">3 Pounds</option>
          <option value="custom">Custom Size</option>
        </select>

        {/* Frosting Type */}
        <label htmlFor="frosting">Frosting Type:</label>
        <select
          id="frosting"
          name="frosting"
          value={formData.frosting}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>Select frosting</option>
          <option value="buttercream">Buttercream</option>
          <option value="fondant">Fondant</option>
          <option value="whipped-cream">Whipped Cream</option>
          <option value="ganache">Ganache</option>
          <option value="custom">Custom Frosting</option>
        </select>

        {/* Reference Image */}
        <label htmlFor="referenceImage">Reference Image:</label>
        <input
          type="file"
          id="referenceImage"
          name="referenceImage"
          accept="image/*"
          onChange={handleFileChange}
        />

        {/* Other Details */}
        <label htmlFor="otherDetails">Other Details:</label>
        <textarea
          id="otherDetails"
          name="otherDetails"
          rows="4"
          value={formData.otherDetails}
          onChange={handleInputChange}
          placeholder="Enter any special instructions or details..."
        ></textarea>

        {/* Delivery Date */}
        <label htmlFor="deliveryDate">Delivery Date:</label>
        <input
          type="date"
          id="deliveryDate"
          name="deliveryDate"
          value={formData.deliveryDate}
          onChange={handleInputChange}
          required
        />

        {/* Submit Button */}
        <button type="submit" className="add-to-cart-btn">Add to Cart</button>
      </form>
    </div>
  );
};

export default Customize;

export function End() {
    return (
        <div>
            <div className="ending-section">
                {/* Background content can be added here */}
            </div>
        </div>
    );
}
export function CustomisePage() {
    return (
        <div>
            <Navbar />
            <div className="customise-section">
                {/* Background content can be added here */}
            </div>
            <Customize />
        </div>
    );
}