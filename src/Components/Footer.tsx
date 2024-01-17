

function Footer() {

    const year = new Date().getFullYear()
  return (
    <footer id='footer' className='bg-teal-700'>
        <section className='max-w-4xl flex flex-col mx-auto items-center p-4 text-center 
        md:flex-row'>
            <address>

            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way <br/>
                 Fairfield, New Jersey 12345-5555<br/>
                Email: <a href="mailto:inquiries@acmerockets.com">Inquires@AcmeRockets.com</a><br/>
                Phone: <a href="tel:+15555555555">(555) 555-5555</a>


            </address>
            <nav className='flex flex-col mx-auto p-2'>
                <a href='#rockets'>Our Rockets</a>
                <a href='#testimonials'>Testimonials</a>
                <a href='#contact'>Contacts</a>

            </nav>
            <div>
                <p>Copyright &copy; <span id='year'>{year}</span></p>
                <p>All Rights Reserved</p>

            </div>
        </section>

    </footer>
  )
}

export default Footer