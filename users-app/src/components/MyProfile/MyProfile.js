import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './MyProfile.css'
const MyProfile = () => {
    const navigate = useNavigate()
    const [edit, setEdit] = useState(false)
    const [userDetails, setUserDetails] = useState([])
    const email = localStorage.getItem("userEmail")
    const token = localStorage.getItem("token")
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [desc, setDesc] = useState('');
    useEffect(() => {
        fetch(`http://localhost:3005/api/v1/users/${email}`)
            .then(res => res.json())
            .then(result => {
                if (result[0]?.name) {
                    setName(result[0]?.name)
                    setDesc(result[0]?.desc)
                    setImg(result[0]?.img)
                }
            })

    }, [email])

    console.log(userDetails)
    const handlUpdateUser = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const desc = e.target.desc.value;
        const img = e.target.img.value;
        const data = {
            name,
            desc,
            img,
        }
        let config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        console.log(data)
        if (data) {
            const response = await axios.patch(`http://localhost:3005/api/v1/users/${email}`, data, config)
            console.log(response)
            if (response?.data?.acknowledged) {
                setEdit(false)
            }
        }
    }
    console.log(email)
    return (
        <div>
            <Container>
                <div className='register-style mx-auto p-4 mt-5'>
                    <h3>My Profile</h3>
                    <form onSubmit={handlUpdateUser}>
                        <div className='mb-3'>
                            {
                                edit ?
                                    <>
                                        <p className='mb-0 text-start'>Image</p>
                                        <input className='input-style' type="text" value={img} onChange={(e) => setImg(e.target.value)} name="" id="img" disabled={!edit ? true : false} />
                                    </>
                                    :
                                    <img className='profile-img' src={img} alt="" />
                            }
                        </div>
                        <div className='mb-3'>
                            <p className='mb-0 text-start'>Name</p>
                            <input className='input-style' type="text" value={name} onChange={(e) => setName(e.target.value)} name="" id="name" disabled={!edit ? true : false} />
                        </div>
                        <div className='mb-3'>
                            <p className='mb-0 text-start'>Description</p>
                            <textarea className='input-style' type="text" value={desc} onChange={(e) => setDesc(e.target.value)} name="" id="desc" disabled={!edit ? true : false} />
                        </div>
                        {
                            !edit &&  <button onClick={() => setEdit(true)} className='w-100 mt-3 login-btn'>Edit</button>
                               
                        }
                        {
                            edit && 
                            <>
                            <button className='w-100 mt-3 login-btn' type="submit">Save</button>
                            <button onClick={() => setEdit(false)}  className='w-100 mt-3 login-btn bg-danger'>Cancel</button>
                            </>
                        }



                    </form>
                </div>
            </Container>
        </div>
    );
};

export default MyProfile;