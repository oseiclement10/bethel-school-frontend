export type Applicant = {
    id: number;
    first_name: string;
    last_name: string;
    other_names: string | null;
    full_name: string;
    passport: string | null;
    nationality: string;
    religion: string;
    hometown: string;
    father_name: string;
    father_phone_number: string;
    father_phone_code: string;
    father_occupation: string;
    mother_name: string;
    mother_occupation: string;
    mother_phone_number: string;
    mother_phone_code: string;
    guardian_name: string;
    guardian_phone_number: string;
    guardian_phone_code: string;
    guardian_relationship: string;
    emergency_contact_type: string;
    identification_image: string;
    identification_type: string;
    identification_number: string;

    gender: "male" | "female" | string;
    date_of_birth: string;
    email: string;
    phone_code: string;
    phone_number: string;
    address: string;
    created_at: string;
    updated_at: string;
};
export type AccomodationType = "day" | "boarding" | "other";

export type AdmissionApplicationResp = {
    admission: AdmissionApplication,
    proceed_to_pay: boolean;
    amount: number;
}

export type AdmissionApplication = {
    id: number;
    applicant: Applicant;
    payment: AdmissionFeePayment | null;
    application_year: string;
    educational_level: string;
    accomodation_type: AccomodationType;
    educational_doc: string | null;
    status: "approved" | "rejected" | "pending";
    created_at: string;
    updated_at: string;
};

export interface AdmissionFeePayment {
    id: number;
    applicant_id: number;
    admission_application_id: number;
    amount: number;
    status: "PAID" | "PENDING" | "CANCELLED" | "REFUNDED";
    reference_id: string;
    payment_method: string;
    created_at: string;
    updated_at: string;
    application: AdmissionApplication;
}

export interface Student {
    id: number;
    admission_id: string;
    full_name: string;
    student_number: string;
    passport?: string;
    first_name: string;
    last_name: string;
    other_names?: string;
    gender: "male" | "female" | "other";
    date_of_birth?: string; // ISO string

    email?: string;
    phone_code?: string;
    phone_number?: string;
    address?: string;

    religion?: string;
    nationality?: string;
    hometown?: string;
    accomodation_type: AccomodationType;
    status: StudentStatus;

    identification_image: string;
    identification_type: string;
    identification_number: string;

    password?: string;

    created_at: string;
    updated_at: string;
}

export type StudentStatus =
    | "active"
    | "inactive"
    | "suspended"
    | "graduated"
    | "expelled"
    | "withdrawn";

export interface CommonModel extends Timestamps {
    id: number;
    status: boolean;
    created_at: string;
    updated_at: string;
}

export interface Timestamps {
    created_at: string;
    updated_at: string;
}

export type UpdateProps = {
    id: number | string;
    data: object;
    extraPath?: string;
};


export interface ClassName extends CommonModel {
    name: string;
    stage: {
        id: number;
        name: string;
    };

}

export interface AcademicYear extends CommonModel {
    start_year: string;
    end_year: string;
}

export interface AcademicDivision extends CommonModel {
    name: string;
}

export interface AcademicSession extends CommonModel {
    name: string;
    academic_year: AcademicYear;
    academic_division: AcademicDivision;
    start_date: string;
    end_date: string;
    total_days: number;
    is_current: boolean;
}

export interface StudentEnrollMent extends CommonModel {
    class_name: ClassName;
    student: Student;
    academic_session: AcademicSession;
}

export interface Guardian {
    id: number;
    name: string;
    phone_number: string;
    address: string;
    occupation: string;
    relationship: string;
    created_at: string;
}

export interface StudentDetails extends Student {
    guardians: Guardian[];
    class_lists: StudentEnrollMent[];
    recent_class: StudentEnrollMent | null;
    current_class: StudentEnrollMent | null;
}

export interface Stage {
  id: number;
  name: string;
  status: boolean;
}

export interface Fee {
  id: number;
  name: string;
  amount: number;
}

export interface BillData {
    id: number;
    name: string;
    status: boolean;
    academic_year_id: number;
    academic_year: AcademicYear;
    fees: Fee[];
    stage: Stage;
    applies_to: string;
    created_at: string;
    updated_at: string;
}