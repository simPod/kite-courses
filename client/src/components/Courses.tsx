import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Posture Mastery",
    image:
      "https://pixabay.com/get/g46a75ce841cc1f230cfddea4864ec492099d735c4be4cd77e9024defb3744b2e09f339834ec8289f2ef378694ebd64d1b6f1c948da8be530660920593ab141d8_1280.jpg",
    description:
      "Perfect your stance and body positioning to increase control and prevent injuries. This foundation is crucial for progressing to advanced techniques.",
    tags: ["All Levels", "Technique Focus", "Video Analysis"],
  },
  {
    id: 2,
    title: "Perfect Takeoffs",
    image:
      "https://pixabay.com/get/g85e16247f3e2e3d6936476b7bb09c93292b9734c20888b3d95c6d5a910d745062f55a7dbf94d5c39abcf3e711b32b4df9b5105bd0951a668835754c46c180258_1280.jpg",
    description:
      "Master water starts and board control for smooth, efficient takeoffs every time. Learn the subtle techniques for getting up quickly in various conditions.",
    tags: ["Beginner/Intermediate", "Water Skills", "Practical Drills"],
  },
  {
    id: 3,
    title: "Advanced Tricks",
    image:
      "https://pixabay.com/get/g4422beb72b315c4496de081a4469785571f79eda4bd591879b40c34055c92fc4ecae195c9de6a80a6d2c5ce76ec1230de28ed9d09870d793ab74c83c1f3b89d4_1280.jpg",
    description:
      "Push your limits with advanced jump techniques, rotations, and freestyle maneuvers. Session includes step-by-step progression to land your dream tricks safely.",
    tags: ["Intermediate/Advanced", "Freestyle", "Progressive Learning"],
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="py-20 bg-gradient-to-b from-white to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-montserrat font-bold mb-4 text-foreground">
            Specialized <span className="text-primary">Coaching</span> Programs
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto font-inter">
            Tailored coaching sessions designed to elevate your skills,
            regardless of your current level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={`${course.title} Coaching`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 mb-6 font-inter">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <a href="#contact">Book Session</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
