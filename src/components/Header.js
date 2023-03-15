import book from '../img/book.png'
import moon from '../img/moon.png'
import { MenuItem, Select, Switch } from '@mui/material';

function Header({toggle, setToggle, font, setFont}) {

    function handleTheme() {
        setToggle(prevState => !prevState)
        if (toggle) {
            document.body.style.background = 'white'
        }
        else if (!toggle) {
            document.body.style.background = 'gray'
        }
    }

    function handleChange(e) {
        setFont(e.target.value)
    }

  return (
    <div className='flex justify-between w-[%100] items-center px-5'>
        <div>
            <img src={book} alt="book" className='h-[80px] w-[80px]'/>
        </div>
        <div className='flex items-center p-2 sm:gap-10 gap-2' > 
            <Select value={font} onChange={handleChange} color='info' >
                <MenuItem value={'serif'}>serif</MenuItem>
                <MenuItem value={'sans-serif'}>sans-serif</MenuItem>
                <MenuItem value={'monospace'}>monospace</MenuItem>
            </Select>
            <div className='flex gap-2'>
                <Switch
                 checked={toggle}
                 onClick={handleTheme}/>
                 <img src={moon} alt="moon" className='h-[35px] w-[35px]'/>
            </div>
        </div>
    </div>
  )
}

export default Header