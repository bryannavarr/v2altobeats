import { Fragment, SyntheticEvent, useState, ChangeEvent } from "react";
import { sendMessage } from "@/services/contactus.service";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}
const Contact = () => {
  const initialContactFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [contactFormData, setContactFormData] = useState<ContactForm>(
    initialContactFormData
  );
  const [formSuccess, setFormSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submitState = {
    name: contactFormData.name !== "",
    email: contactFormData.email !== "" && contactFormData.email.includes('@'),
    message: contactFormData.message !== "",
  };

  const isSubmitButtonDisabled = Object.values(submitState).some((value)=>!value) || isLoading

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true)
    sendMessage(contactFormData).then((response) => {
      if (response.success) {
        setFormSuccess(true);
        setIsLoading(false)
        setTimeout(() => {
          setFormSuccess(false);
        }, 2000);
        setContactFormData(initialContactFormData)
      }
    }).catch(err=>{
      console.log(err.message)
      setFormSuccess(false)
      setIsLoading(false)
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  return (
    <Fragment>
      <div className="w-3/4 justify-center text-center mx-auto sm:w-1/2 text-lg mt-12">
        <h1 className="text-4xl text-center md:text-5xl mb-2">Contact Us</h1>
        <p className="lg:w-2/3 mx-auto mt-6 mb-8 leading-relaxed text-base">
          Have an inquiry or comment? Fill out the form below and we'll get back
          to you as soon as possible.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="string"
                id="name"
                name="name"
                value={contactFormData.name}
                onChange={(e) => {
                  handleChange(e);
                }}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={contactFormData.email}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="string"
                name="message"
                onChange={(e) => {
                  handleChange(e);
                }}
                value={contactFormData.message}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300  focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button
              onClick={(e) => {
                handleFormSubmit(e);
              }}
              className="block w-full mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none  rounded text-lg disabled:opacity-50"
              disabled={isSubmitButtonDisabled}
            >
              Send
            </button>
          </div>
          {formSuccess && (
            <div className="justify-center mx-auto">
              <p>Message received, thanks!</p>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
    </Fragment>
  );
};

export default Contact;
