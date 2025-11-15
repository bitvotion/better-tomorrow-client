import React from "react";
import image from '../../assets/newsletter.jpg'
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";


const AboutPage = () => {

    const {user} = useAuth()
    const navigate = useNavigate()

    const handleJoin = () => {
        if(user) {
            toast.success("You are already a part of our family. Stay tuned!")
        }
       else{
         navigate('/register')
       }
    }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center py-12 px-4">
      <div className="max-w-[1536px] mx-auto bg-base-100 shadow-lg rounded-xl p-8 md:p-12 flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl text-base-content md:text-5xl font-bold mb-6">
            About Better Tomorrow
          </h1>
          <p className=" text-base-content md:text-lg mb-4">
            Better Tomorrow is a platform dedicated to creating opportunities for communities,
            empowering individuals, and spreading awareness for social welfare activities.
          </p>
          <p className=" text-base-content md:text-lg mb-4">
            Our mission is to make a tangible difference in people's lives by organizing events,
            sharing knowledge, and connecting like-minded people for a better future.
          </p>
          <p className=" text-base-content md:text-lg mb-6">
            Join us in our journey to build a brighter, more inclusive tomorrow.
          </p>
          <button onClick={handleJoin} className="btn btn-secondary btn-lg "> 
            Join Us
          </button>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img
            src={image}
            alt="About Better Tomorrow"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
