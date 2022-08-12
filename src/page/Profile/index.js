import React, { useState, useEffect } from "react"
import TopBar from "../../component/view/appBar";
import avatar from "../../assets/avatar/avatar.png"
const Profile = (props) => {
    const [formData, setFormData] = useState({
        user: {
            username: "",
            password: ""
        },
    });

    const handleChange = (e) => {
        setFormData({
            user: {
                ...formData.user,
                [e.target.name]: e.target.value,
            },
        });
    };

    return (
        <>
            <div class="flex  mt-20">
                <div className="font-extrabold  w-full  max-w-md  m-auto text-center pt-5  text-5xl mt-12 mb-5		">Profile</div>
            </div>

            <div class="flex ">
                <div className=" w-full grid grid-cols-3 gap-4 max-w-md m-auto bg-gray-100 rounded-lg border border-primaryBorder shadow-default py-10  px-8">
                    <div className="col-span-2">
                        <div className="mb-8 " >
                            <p>
                                <span className="text-gray-600 text-xl	  font-family:roboto font-bold">Nama</span>
                            </p>
                            <strong className="text-black text-lg   font-family:roboto font-bold ">Tony Stark</strong>
                        </div>

                        <div className="mb-8" >
                            <p>
                                <span className="text-gray-600 text-xl	  font-family:roboto font-bold">Alamat</span>
                            </p>
                            <strong className="text-black text-lg   font-family:roboto font-bold">Malybu Mansion</strong>
                        </div>

                        <div className="mb-8" >
                            <p>
                                <span className="text-gray-600 text-xl	  font-family:roboto font-bold">No. HP</span>
                            </p>
                            <strong className="text-black text-lg   font-family:roboto font-bold">212-970-4133</strong>
                        </div>
                    </div>
                    <div><img src={avatar} /></div>

                    <div className="mb-8 col-span-3" >
                        <p>
                            <span className="text-gray-600 text-xl	  font-family:roboto font-bold">Email</span>
                        </p>
                        <strong className="text-black text-lg   font-family:roboto font-bold">@starkenterprises.com</strong>
                    </div>

                    <div className="mb-8 col-span-3" >
                        <p>
                            <span className="text-gray-600 text-xl	  font-family:roboto font-bold">Motto</span>
                        </p>
                        <strong className="text-black text-lg   font-family:roboto font-bold">The best thing about a boolean is even if you are wrong, you are only off by a bit.</strong>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Profile



