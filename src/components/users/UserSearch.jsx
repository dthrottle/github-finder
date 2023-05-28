import {useContext, useState} from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
    const [text, setText] = useState('')

    const handleChange = (e) => setText(e.target.value)

    const {users, searchUsers, clearUsers} = useContext(GithubContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (text==='') {
            alert('Please enter something')
        }
        else {
            
            searchUsers(text)
            setText('')
        }
    }

    const clearSearch = () => {
        setText('')
        clearUsers()
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <div className='relative'>
                        <input type="text"
                            className='w-full pr-40 bg-gray-200 input input-lg text-black'
                            placeholder='Search'
                            value={text}
                            onChange={handleChange}/> 
                        <button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg' type='submit'>
                            GO    
                        </button>                   
                    </div>
                </div>
            </form>
        </div>
        {users.length > 0 && (
            <div>
                <button onClick={clearSearch} className='btn btn-ghost btn-lg'>Clear</button>
            </div>
        )}
    </div>
  )
}

export default UserSearch