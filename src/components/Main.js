import React, { useState } from 'react'
import Defination from './Defination'
import player from '../img/375.png'


function Main({font, toggle}) {

    const [dict, setDict] = useState(
        [{"word":"welcome","phonetic":"/ˈwɛlkəm/","phonetics":[{"text":"/ˈwɛlkəm/","audio":""},{"text":"/ˈwɛlkəm/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/welcome-uk.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=9028956","license":{"name":"BY 3.0 US","url":"https://creativecommons.org/licenses/by/3.0/us"}},{"text":"/ˈwɛlkəm/","audio":"https://api.dictionaryapi.dev/media/pronunciations/en/welcome-us.mp3","sourceUrl":"https://commons.wikimedia.org/w/index.php?curid=1157403","license":{"name":"BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"}}],"meanings":[{"partOfSpeech":"noun","definitions":[{"definition":"The act of greeting someone’s arrival, especially by saying \"Welcome!\"; reception.","synonyms":[],"antonyms":[]},{"definition":"The utterance of such a greeting.","synonyms":[],"antonyms":[]},{"definition":"Kind reception of a guest or newcomer.","synonyms":[],"antonyms":[],"example":"We entered the house and found a ready welcome."},{"definition":"The state of being a welcome guest.","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]},{"partOfSpeech":"verb","definitions":[{"definition":"To affirm or greet the arrival of someone, especially by saying \"Welcome!\".","synonyms":[],"antonyms":[]},{"definition":"To accept something willingly or gladly.","synonyms":[],"antonyms":[],"example":"We welcome suggestions for improvement."}],"synonyms":[],"antonyms":[]},{"partOfSpeech":"adjective","definitions":[{"definition":"Whose arrival is a cause of joy; received with gladness; admitted willingly to the house, entertainment, or company.","synonyms":[],"antonyms":[],"example":"Refugees welcome in London!"},{"definition":"Producing gladness.","synonyms":[],"antonyms":[],"example":"a welcome present;  welcome news"},{"definition":"Free to have or enjoy gratuitously.","synonyms":[],"antonyms":[],"example":"You are welcome to the use of my library."}],"synonyms":[],"antonyms":[]},{"partOfSpeech":"interjection","definitions":[{"definition":"Greeting given upon someone's arrival.","synonyms":[],"antonyms":[]},{"definition":"Ellipsis of you're welcome.","synonyms":[],"antonyms":[]}],"synonyms":[],"antonyms":[]}],"license":{"name":"CC BY-SA 3.0","url":"https://creativecommons.org/licenses/by-sa/3.0"},"sourceUrls":["https://en.wiktionary.org/wiki/welcome"]}]    )

    function startAudio() {
        new Audio(dict[0].phonetics[0].audio).play()
    }
    
    const [word, setWord] = useState('')

    function handleChange(e) {
        setWord(e.target.value)
    }

    function handleSearch(e) {
        if (e.key === 'Enter') {
            fetchDict()
            console.log(dict)
        }
    }

    async function fetchDict(){
        if (word){
            try{
            const url = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            const response = await url.json()
            if (response[0].word){
                setDict(response)
            }
            }
            catch {
                alert('There No such word!')
            }

        }
        else{
            alert('Type Something in the input!') 
        }
    }

  return (
    <div className='flex flex-col items-center w-[100%] justify-center 
    mt-[20px]  p-2'>
        <div className='flex flex-col p-7 min-w-[60%]'>
            <input style={{fontFamily:font}} type="text" placeholder='Type a word' className={`
            border-black border-[2px] rounded-lg p-2 
            `} onChange={handleChange} value={word} onKeyDown={handleSearch}/>
            <div className='flex w-[100%] items-center justify-between py-7'>
                <div className='flex flex-col items-center'>
                    <h1 style={{fontFamily:font}} className={`${toggle ? 'text-white' : 'text-black'} text-[50px]`}>{dict[0].word}</h1>
                    <h1 style={{fontFamily:font}} className={`${toggle ? 'text-white' : 'text-black'} text-[40px]`}>{dict[0].phonetic}</h1>
                </div>
                <img onClick={startAudio} src={player} alt={'playbutton'} className="w-[100px] h-[100px] cursor-pointer"/>

            </div>
            {dict[0].meanings.map((mean, index) => <Defination type={mean.partOfSpeech} defi={mean.definitions} font={font} key={index} toggle={toggle}/>)}
        </div>
    </div>
  )
}

export default Main