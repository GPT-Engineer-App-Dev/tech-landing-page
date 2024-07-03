import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-4 py-16">
        <h1 className="text-5xl font-bold">Welcome to Tech Company</h1>
        <p className="text-xl text-muted-foreground">
          We provide innovative tech solutions to help your business grow.
        </p>
        <div className="space-x-4">
          <Button size="lg">Learn More</Button>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mt-8" />
      </section>

      {/* About Section */}
      <section className="flex flex-col items-center text-center space-y-4 py-16">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Tech Company is dedicated to providing top-notch tech solutions that
          drive success and innovation. Our mission is to empower businesses
          with cutting-edge technology and exceptional service.
        </p>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mt-8" />
      </section>

      {/* Services Section */}
      <section className="space-y-8 py-16">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Service One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We offer exceptional service one to meet your needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Service Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We offer exceptional service two to meet your needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Service Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We offer exceptional service three to meet your needs.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8 py-16 bg-muted/40">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Tech Company provided excellent service and support."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"Their solutions are innovative and effective."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mike Johnson</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"I highly recommend Tech Company for all your tech needs."</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-8 py-16">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-4">
          <Input {...register("name")} placeholder="Name" />
          <Input {...register("email")} type="email" placeholder="Email" />
          <Input {...register("subject")} placeholder="Subject" />
          <Textarea {...register("message")} placeholder="Message" />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="mt-8">
          <img src="https://placehold.co/600x400" alt="placeholder" />
        </div>
      </section>
    </div>
  );
};

export default Index;