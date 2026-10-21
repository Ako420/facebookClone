import { API_URL } from "@/constant/config";
import { create } from "zustand";

interface userData {
  message: string;
  token: string;
  user: {
    id: string;
    name: String;
    email: string;
    phone: string;
    avatarUrl: string;
    profileUrl: string;
    wkor: string;
    location: {
      city: string;
      country: string;
    };
    intro: string;
    friendsCount: number;
    createdAt: string;
  };
}

interface AuthStore {
  userDetails: userData | null;
  loginError: string | null;
  setUserDetails: (userDetails: userData | null) => void;
  login:(email:string, password:string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userDetails: null,
  loginError:null,
  setUserDetails: (userDetails: userData | null) => set({ userDetails }),
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers:{
        "content-Type":"application/json",
        "Accept":"application/json"
      }
    });

    const data = await response.json();

    if (response.ok) {
      set({ userDetails: data , loginError:null});
      console.log(data)
    }else{
        set({userDetails:null, loginError:data.message})
        throw new Error(data.message)
    }
  },
}));
