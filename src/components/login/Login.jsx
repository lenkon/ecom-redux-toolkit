import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

const Login = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-items-center h-screen'>
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" type='text' name='email' />
          <Input label="Password" size="lg" type='password' name='password' />
          <Input label="Image URL address" size="lg" type='text' name='image' />
          <div className="-ml-2.5">
            {/* <Checkbox label="Remember Me" /> */}
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Image is optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login;