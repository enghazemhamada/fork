export default function ContactSection() {

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <div className="contactSection">
            <div className="container">
                <div className="info">
                    <h3>Get In Touch</h3>
                    <p>We are always waiting for your order and prepare it as quickly as possible.</p>
                    <h4>Email</h4>
                    <span>fork@gmail.com</span>
                    <h4>Phone</h4>
                    <span>0123456789</span>
                    <span>0123456789</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" name="name" placeholder="Your Name" />
                    <input className="input" type="email" name="email" placeholder="Your Email" />
                    <textarea className="input" name="message" placeholder="Your Message"></textarea>
                    <input className="submit" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}