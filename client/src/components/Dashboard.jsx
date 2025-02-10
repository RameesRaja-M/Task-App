// Import UseState & UseEffect
import React, { useContext, useEffect, useState } from 'react'
import auth from '../config/firebase'
// Import UseContext
import { UserContext } from './Context/UserContext'

// Import Axios
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom'



// DashBoard Component
function Dashboard() {

  // Add Task Usestate's
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState("")
  const [editid, setEditId] = useState(-1)
  const [status, setStatus] = useState('ToDo');

  // Edit Task Usestate's
  const [editTitle, setEditTitle] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editStatus, setEditStatus] = useState('ToDo')

  // Search Usestate's
  const [search, setSearch] = useState('')
  const [allTasks, setAllTasks] = useState([]);

  // SortBy & FilterBy UseState's
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("asc");
  const [sortByStatus, setSortByStatus] = useState('All');

  // UseContext
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const location = useLocation()

  // API URL 
 const serverURL = import.meta.env.VITE_SERVER_URL;

  // Get Task UseEffect
  useEffect(() => {
    getTasks()
  }, [])

  // sortBy Title,Date UseEffect
  useEffect(() => {
    let sortedTasks = [...tasks];

    if (sortBy === "title") {
      sortedTasks.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "date") {
      sortedTasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Newest first
    }

    if (order === "desc") {
      sortedTasks.reverse();
    }

    setTasks(sortedTasks);
  }, [sortBy, order]);


  // Sort By Status UseEffect
  useEffect(() => {
    let filteredTasks = [...allTasks];
    if (sortByStatus !== 'All') {
      filteredTasks = filteredTasks.filter(task => task.status === sortByStatus);
    }
    setTasks(filteredTasks); // Set the filtered list of tasks
  }, [sortByStatus, allTasks]); // Whenever allTasks or sortByStatus changes, we re-filter

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount

    const logout = auth.onAuthStateChanged(function (user) {
      if (!user && location.pathname === "/dashboard") {
        // Show alert ONLY if the user is on the dashboard page
        alert("Please login to access the dashboard.");
        navigate("/login"); // Redirect to login
      }
    });

    return () => {
      logout(); // Clean up listener on component unmount
    };
  }, [location, navigate]); // Dependencies

  // Submit Function
  const handlesubmit = () => {
    

    if (title.trim() !== '' && description.trim() !== '') {
      axios.post(`${serverURL}/api/tasks`, {
        title,
        description,
        status,
        isPinned: false,
        userId: user.uid, // Ensure the task is associated with the logged-in user
      },{ withCredentials: true})
        .then((res) => {
          setTasks((prevTasks) => [res.data, ...prevTasks]);
          setAllTasks((prevTasks) => [res.data, ...prevTasks]);
          setTitle('');
          setDescription('');
          setStatus('ToDo');
          console.log("Added Successfully");
          alert("Task Added Successfully")
        })
        .catch(() => setError("Unable to create Task"));
    }
  };

 

  // Get Task 
  const getTasks = async () => {
   
    await axios.get(`${serverURL}/api/tasks`,{ withCredentials: true})
      .then((res) => {
          console.log(res)
        // Filter tasks for the logged-in user
        const userTasks = res.data.filter(task => task.userId === user.uid);

        // Sort tasks by pin status and date
        const sortedTasks = userTasks.sort((a, b) => {
          if (a.isPinned === b.isPinned) {
            return new Date(b.createdAt) - new Date(a.createdAt); // Newest first
          }
          return b.isPinned - a.isPinned; // Pinned first
        });

        setTasks(sortedTasks);
        setAllTasks(sortedTasks); // Store all tasks for search and filter purposes
      })
      .catch(() => setError("Unable to fetch tasks"));
  };



  // Edit Tasks
  const handleEdit = (item) => {
    setEditId(item._id);
    setEditTitle(item.title);
    setEditDescription(item.description)
    setEditStatus(item.status)
  }


  // Update Tasks
  const handleupdate = () => {
    setError('')
    if (editTitle.trim() !== '' && editDescription.trim() !== '') {
      axios.put(`${serverURL}/api/tasks/${editid}`, { title: editTitle, description: editDescription, status: editStatus },{ withCredentials: true})
        .then(() => {
          const updatedTasks = tasks.map((item) => {
            
            if (item._id === editid) {
              return { ...item, title: editTitle, description: editDescription, status: editStatus };
            }
            return item;
          })
          setTasks(updatedTasks); // Update state immediately with the modified task
          setAllTasks(updatedTasks); // Also update allTasks for proper filtering
          setEditTitle('')
          setEditDescription('')
          setEditStatus('ToDo')
          setEditId(-1) // Edit Field Show 
          alert("Task Updated Successfully")
          console.log("Updated Successfully")
        })
        .catch(() => setError("Unable to update Task"))
    }
  }


  // Handle Edit Function
  const handleEditCancel = () => {
    setEditId(-1)
  }

  // Handle Delete Function
  const handleDelete = (id) => {
    axios.delete(`${serverURL}/api/tasks/${id}`,{ withCredentials: true})
      .then(() => {
        const updatedTasks = tasks.filter((item) => item._id !== id) // not equal task using filter method to list
        setTasks(updatedTasks)   // show UI 
        setAllTasks(updatedTasks)  // delete a task updated to tasks 
        alert("Task Deleted Successfully")
        console.log("Deleted Successfully")
      }).catch(() => {

      })
  }

  // Handle Search Function 
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase(); // consider Lower & Upper Case Letters

    setSearch(searchValue);
    if (searchValue === "") {
      setTasks(allTasks);
    } else {
      setTasks(allTasks.filter((task) => task.title.toLowerCase().includes(searchValue)));

    }
  }


  // Handle Date Function 
  const handleDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    return new Date(dateString).toLocaleDateString(undefined, options) + ' ';
  }

  // Status-based text color
  const getStatusColor = (status) => {
    switch (status) {
      case 'ToDo':
        return { color: '#1E90FF' }; // Blue
      case 'In Progress':
        return { color: '#ffff00' }; // Yellow
      case 'Completed':
        return { color: '#32CD32' }; // Green
      default:
        return { color: '#000000' }; // Default Black
    }
  };


  // Handle Pin Function
  const handlePin = (id) => {
    axios.put(`${serverURL}/api/tasks/pin/${id}`,{ withCredentials: true}) // sent to PUT request to Update
      .then((res) => {
        const updatedTasks = tasks.map((task) =>
          task._id === res.data._id ? { ...task, isPinned: res.data.isPinned } : task
        )
        .sort((a, b) => {
          if (a.isPinned === b.isPinned) {
            return new Date(b.createdAt) - new Date(a.createdAt); // Newest first
          }
          return b.isPinned - a.isPinned; // Pinned first
        });
        setTasks(updatedTasks);
        setAllTasks(updatedTasks);
        
      })
      .catch(() => setError("Unable to pin/unpin the task"));
  };


  return (
    <>

      {/* Create Task Form */}


      <div>
        <h1 className='text-xl text-center py-2 md:text-5xl md:py-5 text-[#3368C0] font-pacifico'>Taskform</h1>

      </div>
      <div className=''>

        <div className='flex flex-col gap-5 items-center'>
          <div>
            <input type="search" placeholder='  Search a title' className='border rounded-lg w-[300px] h-[40px] md:w-[600px] md:mb-5' onChange={handleSearch} />
          </div>

          <div className='flex gap-14 md:gap-40 md:mb-4'>
            <div>
              {/* Dropdown to choose Title or Date */}
              <label>Sort By:  </label>
              <select className='border px-3 rounded-md' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="title"> Title</option>
                <option value="date"> Date</option>
              </select>
            </div>

            <div>
              {/* Dropdown to choose Ascending or Descending */}
              <label>Order: </label>
              <select className='border px-2 rounded-md' value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>

          <div>
            <label>Sort By Status: </label>
            <select className='border px-2 rounded-md mt-3' value={sortByStatus} onChange={(e) => setSortByStatus(e.target.value)}>
              <option value="All">All</option>
              <option value="ToDo">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

        </div>



        <div className='flex flex-col mt-4 gap-3 items-center md:mt-10 md:gap-6 '>
          <input type="text" placeholder=' Title' onChange={(e) => setTitle(e.target.value)} value={title} className='border w-[340px] h-[40px] md:w-[600px] md:h-[50px] rounded-md' />
          <textarea placeholder=' Description' onChange={(e) => setDescription(e.target.value)} value={description} className='border w-[340px] md:w-[600px] rounded-md' />

          <button className='bg-[#3368c0] text-white px-14 py-2 rounded-md font-poppins font-medium text-xl' onClick={handlesubmit}>Submit</button>
        </div>
       
      </div>

      {/* Listing Tasks */}
      <div className='mt-7'>
        <h3 className='text-center text-3xl mb-5 text-[#3368C0]  p-2 md:text-4xl font-pacifico'>Latest Tasks List</h3>
        <ul>
          {tasks.map((item) => (
            <li key={item._id} className='flex flex-col border p-1 m-3 md:m-12 md:p-3 md:flex-row md:justify-between md:items-center'>
              <div className='flex flex-col '>
                {editid !== item._id ? (
                  <div className='flex flex-col gap-1 py-2'>

                    <p className='md:text-xl'>{item.title}</p>
                    <p className=''>{item.description}</p>
                    <p style={getStatusColor(item.status)} className='font-medium'>
                      <span className='text-black'>Status :</span>
                      {item.status}</p>
                    <p>Date : {handleDate(item.date)}</p>

                  </div>
                ) : (
                  <div className='flex flex-col p-2 gap-2'>
                    <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} className='border md:w-[700px] md:h-[40px]' />
                    <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className='border md:w-[700px]' />
                    <select value={editStatus} onChange={(e) => setEditStatus(e.target.value)} className='border h-[40px]'>
                      <option value="ToDo">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                )}
              </div>
              <div className='flex justify-around mt-2 md:gap-4'>
                <button onClick={() => handlePin(item._id)} className={` ${item.isPinned ? 'bg-blue-400' : 'bg-gray-400'} rounded-md px-4 py-1 md:h-10 md:px-7`}>
                  {item.isPinned ? 'Unpin' : 'Pin'}
                </button>

                {editid !== item._id ? (
                  <button onClick={() => handleEdit(item)} className=' bg-yellow-400 rounded-md px-4 py-1 md:h-10 md:px-7'>Edit</button>
                ) : (
                  <button onClick={handleupdate} className=' bg-yellow-400 rounded-md px-4 py-1 md:h-10 md:px-7'>Update</button>
                )}
                <button onClick={() => handleDelete(item._id)} className=' bg-red-500 rounded-md px-4 py-1 md:h-10 md:px-7'>Delete</button>
                {editid === item._id && <button onClick={handleEditCancel} className=' bg-gray-500 rounded-md px-4 py-1 md:h-10 md:px-7'>Cancel</button>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Dashboard;
