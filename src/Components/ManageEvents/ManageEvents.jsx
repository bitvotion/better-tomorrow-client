import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Loader from '../Loader/Loader';
import ManageEventCard from '../ManageEventCard/ManageEventCard';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import { FaPlusCircle } from 'react-icons/fa';


const ManageEvents = () => {

    const { user } = useAuth()
    const [events, setEvents] = useState([])
    const axiosSecure = useAxiosSecure()
    const [dataLoading, setDataLoading] = useState(true)

    const cards = [
        {
            title: "Create An Event",
            link: "/event/create",
            icon: <FaPlusCircle className="text-3xl text-secondary" />,
            bg: "bg-secondary"
        }
    ];

    useEffect(() => {
        setDataLoading(true)
        if (user) {
            axiosSecure.get(`/myevents?email=${user.email}`)
                .then((data) => {
                    setEvents(data.data)
                    setDataLoading(false)
                })
        }
        else ({ message: "No Events Found for this user" })
    }, [axiosSecure, user])

    // Update handler
    // const handleUpdate = async (id, updatedData) => {
    //     try {
    //         const response = await axiosInstance.patch(`/events/${id}`, updatedData);
    //         const updatedEvent = response.data;
    //         // Update state
    //         setEvents(prev => prev.map(e => e._id === id ? updatedEvent : e));
    //     } catch (error) {
    //         console.error("Failed to update event:", error);
    //     }
    // };

    const handleUpdate2 = async (_id, updatedData) => {
        // e.preventDefault()

        const toastId = toast.loading("Updating your event...")
        try {
            const response = await axiosSecure.patch(`/events/${_id}`, updatedData)
            if (response.data.modifiedCount) {
                toast.success("Event updated successfully!", { id: toastId })
                // navigate('/events/manage')
                setEvents(prev => prev.map(ev => ev._id === _id ? { ...ev, ...updatedData } : ev))
            } else {
                toast.error("An unknown error occurred", { id: toastId })
            }
        } catch (error) {
            console.log("Failed to update event", error);
            toast.error("Failed to update event. Please try again", { id: toastId })
        }
    }

    // Delete handler
    const handleDelete = async (id) => {
        try {
            const response = await axiosSecure.delete(`/events/${id}`);
            if (response.data.deletedCount === 1) {
                setEvents(prev => prev.filter(e => e._id !== id));
            }
            return response.data
        } catch (error) {
            console.error("Failed to delete event:", error);
            throw error;
        }
    };


    if (dataLoading) return <Loader></Loader>

    if (!events.length) {
        return (
            <div className="my-20 max-w-sm mx-auto px-4 ">
                <h2 className="text-center text-xl mb-8 font-semibold">You haven't hosted any event! Create your first event</h2>
                {cards.map((card, idx) => (
                    <Link
                        to={card.link}
                        key={idx}
                        className={`${card.bg} rounded-xl shadow-lg p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 transform transition duration-300`}
                    >
                        <div className="p-4 bg-white rounded-full">{card.icon}</div>
                        <h3 className="text-white text-lg font-bold text-center">{card.title}</h3>
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <div className="max-w-[1536px] min-h-screen mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Manage Your Events</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map(event => (
                    <ManageEventCard
                        key={event._id}
                        event={event}
                        onUpdate={handleUpdate2}
                        onDelete={handleDelete}
                    />
                ))
                }
            </div>
        </div>
    );
};

export default ManageEvents;