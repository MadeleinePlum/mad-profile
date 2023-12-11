import { Application } from "@hotwired/stimulus"
import DarkmodeController from "controllers/darkmode_controller";


const application = Application.start()
application.register("darkmode", DarkmodeController);

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application


export { application }
