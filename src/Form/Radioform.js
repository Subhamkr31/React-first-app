
import './radio.css'


const CreateForm = () => {
    return (
        <div class="container">

            <h2>Which is Your favorite Pets choose one 🤞:</h2>

            <ul>
                <li>
                    <input type="radio" id="f-option" name="selector" />
                    <label for="f-option">Horse</label>

                    <div class="check"></div>
                </li>

                <li>
                    <input type="radio" id="s-option" name="selector" />
                    <label for="s-option">Dog</label>

                    <div class="check"><div class="inside"></div></div>
                </li>

                <li>
                    <input type="radio" id="t-option" name="selector" />
                    <label for="t-option">Cats</label>

                    <div class="check"><div class="inside"></div></div>
                </li>
            </ul>
        </div>
    )
}


export default CreateForm