import React, { useEffect, useState } from "react";
import * as subscribeService from "../services/subscribe.service";

const Footer = () => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const onChange = (e: any) => {
    console.log("sindie user email change");
    setUserEmail(e.target.value);
  };

  const onSubscribe = () => {
    if (userEmail !== "") {
      let email = userEmail;
      subscribeService
        .subscribe(email)
        .then((response) => {
          if (response.isSuccessful || response == "success") {
            setSuccess(true);
            setUserEmail("");
          }
        })
        .catch((err) => {
          console.log("error: " + JSON.stringify(err));
        });
    } else {
      return false;
    }
  };
  return (
    <React.Fragment>
      <div className="mt-40">
        <div className=" bg-gray-900">
          <div className="max-w-2xl mx-auto text-white py-4">
            <div className="text-center mt-32">
              <h3 className="text-3xl mb-3">
                {" "}
                Subscribe to stay updated on the latest releases:
              </h3>
              <div className="bg-transparent p-10 rounded-lg shadow md:w-3/4 mx-auto">
                <form action="">
                  <div className="mb-4">
                    <label className="block mb-2 font-bold text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="userEmail"
                      name="userEmail"
                      placeholder=""
                      className="border shadow p-3 w-full rounded text-black"
                      value={userEmail}
                      onChange={(e) => onChange(e)}
                    />
                    {success ? <span>Thank you for your support!</span> : null}
                  </div>

                  <button
                    type="button"
                    onClick={onSubscribe}
                    className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="flex justify-center my-10">
                {/* <div className="flex items-center border w-auto rounded-lg px-4 py-2 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Google Play Store </p>
                  </div>
                </div>
                <div className="flex items-center border rounded-lg px-4 py-2 w-44 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    className="w-7 md:w-8"
                  />
                  <div className="text-left ml-3">
                    <p className="text-xs text-gray-200">Download on </p>
                    <p className="text-sm md:text-base"> Apple Store </p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="mt-28 flex flex-col md:flex-row justify-center mx-auto text-sm text-gray-400">
              <p className="order-2 md:order-1 mt-8 md:mt-0">
                {" "}
                &copy; AltoBeats LLC, 2023. All Rights Reserved.{" "}
              </p>

              {/* <div className="order-1 md:order-2">
                <p>
                  Contact: <strong>altobeatsinfo@gmail.com </strong>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
