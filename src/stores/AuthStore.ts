import { api } from "@/lib/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  profileUrl?: string;
  work?: string;
  intro?: string;
  location?: { city?: string; country?: string };
  friendsCount?: number;
  createdAt?: string;
}

export interface AuthPayload {
  message: string;
  token: string;
  user: AuthUser;
}

export interface LoginBody {
  email: string;
  password: string;
}
export interface RegisterBody {
  name: string;
  email: string;
  phone: string;
  gender: "male" | "female" | "other" | "";
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

interface AuthStore {
  userDetails: AuthUser | null;
  loginError: string | null;
  setUserDetails: (userDetails: AuthUser | null) => void;
  login: ({ email, password }: LoginBody) => Promise<void>;
  register: (body: RegisterBody) => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  userDetails: null,
  loginError: null,
  setUserDetails: (userDetails: AuthUser | null) => set({ userDetails }),
  login: async ({ email, password }: LoginBody) => {
    const response = await api.post<AuthPayload>("/auth/login", {
      email,
      password,
    });

    const data = await response.json();
    const jsonData = JSON.stringify(data);
    if (data.ok) {
      set({ userDetails: data, loginError: null });
      await AsyncStorage.setItem("data", jsonData);
      console.log(data);
    } else {
      set({ userDetails: null, loginError: data.message });
      throw new Error(data.message);
    }
  },
  checkAuth: async () => {
    try {
      const jsonData = await AsyncStorage.getItem("data");

      if (!jsonData) {
        set({ loginError: "user not login,login to continue" });
        throw new Error("user not log in,login to continue");
      }
    } catch (error) {
      console.log(error);
    }
  },

  register: async (body: RegisterBody) => {
    const { data } = await api.post<AuthPayload>("/auth/register", body);

    data;
  },
}));
