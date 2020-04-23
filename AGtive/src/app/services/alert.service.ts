import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({ providedIn: "root" })
export class AlertService {
    private configSet = false;
    private readonly timeouts = {
        error: 999999,
        info: 20000,
        success: 5000,
        warning: 999999,
    };
    constructor(private toastr: ToastrService) {
    }

    public async success(message: string) {
        // this.config();
        console.log("Success!");
        this.toastr.success(message, `Erfolg!`, { timeOut: this.timeouts.success });
    }

    public async error(message: string) {
        this.config();
        this.toastr.error(message, `Fehler!`, { timeOut: this.timeouts.error });
    }

    public async info(message: string) {
        this.config();
        this.toastr.info(message, `Info:`, { timeOut: this.timeouts.info });
    }

    public async warning(message: string) {
        this.config();
        this.toastr.warning(message, `Warnung!`, { timeOut: this.timeouts.warning });
    }

    public config() {
        if (!this.configSet) {
            this.toastr.toastrConfig.preventDuplicates = true;
            this.configSet = true;
        }
    }
}