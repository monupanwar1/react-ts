import { useState } from "react"

interface ContactFormState{
    name: string;
    email: string;
}

export default function ContactForm (){
    const [formData,setFormData]=useState<ContactFormState>({
        name:'',
        email:'',
    })
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setFormData((prev)=>({...prev,[name]:value}))
        

    }
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(formData)


    }


    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    )
}