import { useState } from "react";

export default function OrderForm() {
  const [form, setForm] = useState({ name: "", phone: "", area: "Bole" });

  const isValid = /^(?:\+251|0)9\d{8}$/.test(form.phone);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
      {!isValid && form.phone && <p style={{color: "red"}}>Invalid phone number</p>}
      <button disabled={!isValid}>Submit Order</button>
    </form>
  );
}