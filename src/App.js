import React, { useState } from 'react'
import Values from 'values.js'

// components
import SingleColor from './components/SingleColor'

function App() {

  const [color, setColor] = useState('')
  const [weight, setWeight] = useState(10)
  const [list, setList] = useState(new Values('#64d6ab').all(weight))
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const colors = new Values(color).all(weight)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <div className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit} >
            <div className="form-control">
                <label htmlFor="weight">Weight</label>
                <input type="number" id="weight" 
                placeholder="10" value={weight} 
                onChange={(e) => setWeight(parseInt(e.target.value))} />
            </div>
            <div className="form-control"> 
                <label htmlFor="color">Color</label>
                <input type="text" id="color" 
                value={color} placeholder="#64d6ab"
                className={`${error ? 'error' : null}`}
                onChange={(e) => setColor(e.target.value)} />
                <button type="submit" className="btn" >Submit</button>
            </div>
        </form>
      </div>
      <div className="colors">
        {
          list.map((color, index) => {
            console.log(color)
            return <SingleColor key={index} {...color} index={index} 
                    hexColor={color.hex} weightColor={weight} />
          })
        }
      </div>
    </>
  );
}

export default App;
