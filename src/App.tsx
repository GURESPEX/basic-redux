// Global state (Redux)
import { useDispatch, useSelector } from "react-redux";
import {
  setUsername,
  setEmail,
  setPassword,
} from "./store/slice/registerFormSlice"; // Import register form actions
import { RootState } from "./store/store";

// Images
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import reduxLogo from "./assets/redux.svg";

// Shadcn UI Component
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

// React Hook Form
import { useForm } from "react-hook-form";

// Zod (Validator)
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "./components/ui/label";
import { Checkbox } from "./components/ui/checkbox";

// React
import { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";
import { MdMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

function App() {
  const [isPasswordShowing, setIsPasswordShowing] =
    useState<CheckedState>(false);

  const toggleShowPassword = (checked: CheckedState) => {
    setIsPasswordShowing(checked);
  };

  // Global State
  const registerForm = useSelector(
    (state: RootState) => state.registerForm.value
  );

  // Dispatcher
  const dispatch = useDispatch();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    dispatch(setUsername(values.username));
    dispatch(setEmail(values.email));
    dispatch(setPassword(values.password));
  }

  return (
    <div className="col justify-center items-center w-screen h-screen p-16">
      <div className="row w-full max-w-[1024px] bg-white border rounded-xl overflow-hidden drop-shadow-sm">
        <div className="col w-full h-full p-16 gap-8">
          <div className="col gap-4">
            <div className="row items-center gap-16">
              <a className="w-full" href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="w-full" alt="Vite logo" />
              </a>
              <a className="w-full" href="https://react.dev" target="_blank">
                <img src={reactLogo} className="w-full" alt="React logo" />
              </a>
              <a className="w-full" href="https://react.dev" target="_blank">
                <img src={reduxLogo} className="w-full" alt="Redux logo" />
              </a>
            </div>
            <div className="col items-center">
              <h1 className="font-bold text-3xl">Vite + React + Redux</h1>
            </div>
          </div>
          <hr />
          <Form {...form}>
            <form className="col gap-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="col gap-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your username"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type={isPasswordShowing ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="row items-center gap-2">
                <Checkbox
                  checked={isPasswordShowing}
                  onCheckedChange={toggleShowPassword}
                  id="showPassword"
                />
                <Label htmlFor="showPassword">Show password</Label>
              </div>
              <Button className="drop-shadow-sm" type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div className="col w-full h-full items-center p-16 gap-8 drop-shadow-sm">
          <h1 className="text-3xl font-bold">Register Form Data</h1>
          <div className="col bg-slate-950 rounded-xl text-white overflow-hidden w-full">
            <div className="col p-8 gap-4 items-start bg-slate-900 text-white">
              <p className="text-2xl font-semibold w-full">
                {registerForm.username ? (
                  registerForm.username
                ) : (
                  <div className="rounded bg-slate-800 w-full h-8 " />
                )}
              </p>
              <p className="row items-center gap-2 text-white text-xs w-full">
                <div className="row justify-center items-center rounded-full text-base">
                  <RiLockPasswordFill />
                </div>
                <div className="w-full">
                  {registerForm.password ? (
                    registerForm.password
                  ) : (
                    <div className="rounded bg-slate-800 w-full h-4 " />
                  )}
                </div>
              </p>
            </div>
            <div className="col p-8 gap-4 items-start">
              <p className="row items-center gap-4 text-white w-full">
                <div className="row justify-center items-center w-8 h-8 rounded-full bg-white text-slate-950">
                  <MdMail />
                </div>
                <div className="flex-1">
                  {registerForm.email ? (
                    registerForm.email
                  ) : (
                    <div className="rounded bg-slate-800 w-full h-6 " />
                  )}
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <div
      className="container"
      style={{
        display: "flex",
      }}
    >
      <div className="screen">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div
          className="card"
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <Input
              labelName="Username:"
              name="username"
              type="text"
              value={localRegisterForm.username}
              onChange={(e) => {
                setLocalRegisterForm({
                  ...localRegisterForm,
                  username: e.target.value,
                });
              }}
              required
            />
            <Input
              labelName="Email:"
              name="email"
              type="email"
              value={localRegisterForm.email}
              onChange={(e) => {
                setLocalRegisterForm({
                  ...localRegisterForm,
                  email: e.target.value,
                });
              }}
              required
            />
            <Input
              labelName="Password:"
              name="password"
              type="password"
              value={localRegisterForm.password}
              onChange={(e) => {
                setLocalRegisterForm({
                  ...localRegisterForm,
                  password: e.target.value,
                });
              }}
              required
            />
            <button style={{ width: "100%" }} type="submit">
              Register
            </button>
          </form>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div className="side">
        <h1>Register Form Data</h1>
        <p>Username: {registerForm.username}</p>
        <p>Email: {registerForm.email}</p>
        <p>Password: {registerForm.password}</p>
      </div>
    </div> */
}
