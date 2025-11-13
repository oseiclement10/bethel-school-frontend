import { CrudService } from "@/services/CrudService"
import Header from "../landing/components/Header"
import Footer from "../landing/Homepage/Footer"
import AdmissionFlow from "./admission-flow"
import { AdmissionProvider } from "./context"
import type { AdmissionApplication } from "@/@types/entities"

export const api = new CrudService<AdmissionApplication>("public/admissions");

const AdmissionProcess = () => {
    return (
        <section className="font-poppins">
            <title>
                Admission
            </title>
            <header className="relative bg-blue-600 " >
                <Header />
            </header>

            <AdmissionProvider>
                <AdmissionFlow />
            </AdmissionProvider>

            <Footer />
        </section>
    )
}

export default AdmissionProcess