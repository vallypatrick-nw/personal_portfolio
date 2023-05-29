import es6 from '../img/es6.jpg'
import boh from '../img/boh.jpg'
import whd from '../img/whd.jpg'

function Blog() {
  return (
    <section className='blog'>
        <h1 className='headings'>My Blog</h1>
        <main>
            <article>
                <figure>
                    <img src={boh} alt='Arrow function' width={300} />
                </figure>
                <div>
                    <h2>Arrow function</h2>
                    <p>Lorem ispum dolor sit consecttur adispising elit.</p>
                    <button className='cta-outline black'>Read More</button>
                </div>

            </article>
            <article>
                <figure>
                    <img src={es6} alt='Ecma 6' width={300} />
                </figure>
                <div>
                    <h2>Ecma 6</h2>
                    <p>Lorem ispum dolor sit consecttur adispising elit.</p>
                    <button className='cta-outline black'>Read More</button>
                </div>

            </article>
            <article>
                <figure>
                    <img src={whd} alt='React Components' width={300} />
                </figure>
                <div>
                    <h2>React Components</h2>
                    <p>Lorem ispum dolor sit consecttur adispising elit.</p>
                    <button className='cta-outline black'>Read More</button>
                </div>

            </article>
        </main>
    </section>
   
  )
}

export default Blog