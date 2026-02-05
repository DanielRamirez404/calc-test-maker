'use client'

import { useState, FormEvent } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  FieldSet,
  FieldLegend
} from "@/components/ui/field"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogOverlay
} from "@/components/ui/alert-dialog"

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ImgFun1 from "./assets/fun1.png";
import ImgFun2 from "./assets/fun2.png";
import ImgFun3 from "./assets/fun3.png";
import ImgFun4 from "./assets/fun4.png";
import ImgFun5 from "./assets/fun5.png";
import ImgFun6 from "./assets/fun6.png";
import ImgFun7 from "./assets/fun7.png";
import ImgFun8 from "./assets/fun8.png";

import ImgLim1 from "./assets/lim1.png";
import ImgLim2 from "./assets/lim2.png";
import ImgLim3 from "./assets/lim3.png";
import ImgLim4 from "./assets/lim4.png";
import ImgLim5 from "./assets/lim5.png";
import ImgLim6 from "./assets/lim6.png";
import ImgLim7 from "./assets/lim7.png";
import ImgLim8 from "./assets/lim8.png";
import ImgLim9 from "./assets/lim9.png";
import ImgLim10 from "./assets/lim10.png";
import ImgLim11 from "./assets/lim11.png";
import ImgLim12 from "./assets/lim12.png";
import ImgLim13 from "./assets/lim13.png";
import ImgLim14 from "./assets/lim14.png";
import ImgLim15 from "./assets/lim15.png";
import ImgLim16 from "./assets/lim16.png";

import ImgDer1 from "./assets/der1.png";
import ImgDer2 from "./assets/der2.png";
import ImgDer3 from "./assets/der3.png";
import ImgDer4 from "./assets/der4.png";
import ImgDer5 from "./assets/der5.png";
import ImgDer6 from "./assets/der6.png";
import ImgDer7 from "./assets/der7.png";
import ImgDer8 from "./assets/der8.png";
import ImgDer9 from "./assets/der9.png";
import ImgDer10 from "./assets/der10.png";
import ImgDer11 from "./assets/der11.png";
import ImgDer12 from "./assets/der12.png";
import ImgDer13 from "./assets/der13.png";
import ImgDer14 from "./assets/der14.png";
import ImgDer15 from "./assets/der15.png";
import ImgDer16 from "./assets/der16.png";
import ImgDer17 from "./assets/der17.png";
import ImgDer18 from "./assets/der18.png";
import ImgDer19 from "./assets/der19.png";
import ImgDer20 from "./assets/der20.png";
import ImgDer21 from "./assets/der21.png";
import ImgDer22 from "./assets/der22.png";
import ImgDer23 from "./assets/der23.png";
import ImgDer24 from "./assets/der24.png";
import ImgDer25 from "./assets/der25.png";
import ImgDer26 from "./assets/der26.png";
import ImgDer27 from "./assets/der27.png";

type ImageAsset = {
  src: string;
};

const allFunImgs: ImageAsset[] = [
  ImgFun1, ImgFun2, ImgFun3, ImgFun4, 
  ImgFun5, ImgFun6, ImgFun7, ImgFun8
];

const allLimImgs: ImageAsset[] = [
  ImgLim1, ImgLim2, ImgLim3, ImgLim4, ImgLim5,
  ImgLim6, ImgLim7, ImgLim8, ImgLim9, ImgLim10,
  ImgLim11, ImgLim12, ImgLim13, ImgLim14, ImgLim15, ImgLim16
];

const allDerImgs: ImageAsset[] = [
  ImgDer1, ImgDer2, ImgDer3, ImgDer4, ImgDer5,
  ImgDer6, ImgDer7, ImgDer8, ImgDer9, ImgDer10,
  ImgDer11, ImgDer12, ImgDer13, ImgDer14, ImgDer15,
  ImgDer16, ImgDer17, ImgDer18, ImgDer19, ImgDer20,
  ImgDer21, ImgDer22, ImgDer23, ImgDer24, ImgDer25,
  ImgDer26, ImgDer27
];

interface Theme {
  name: string;
  description: string;
  images: ImageAsset[];
}

interface Exercise {
  image: ImageAsset;
  theme: string;
  index: number;
}

class ThemeClass implements Theme {
  name: string;
  description: string;
  images: ImageAsset[];

  constructor(name: string, description: string, images: ImageAsset[]) {
    this.name = name;
    this.description = description;
    this.images = images;
  }
}

class ExerciseClass implements Exercise {
  image: ImageAsset;
  theme: string;
  index: number;

  constructor(image: ImageAsset, theme: string, index: number) {
    this.image = image;
    this.theme = theme;
    this.index = index;
  }
}

const themes: Theme[] = [
  new ThemeClass("funciones", "Determinar Dominio, Rango y Graficar", allFunImgs),
  new ThemeClass("límites", "Determinar Límites o Continuidad", allLimImgs),
  new ThemeClass("derivadas", "Hallar Derivada o Aplicaciones", allDerImgs)
];

function getCapitalized(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCheckboxId(name: string): string {
  return `${name}-checkbox`;
}

interface CheckboxFieldProps {
  theme: Theme;
}

function CheckboxField({ theme }: CheckboxFieldProps) {
  const {name, description} = theme; 
  const id = getCheckboxId(name);

  return(
    <Field orientation="horizontal">
      <Checkbox id={id} name={name} className="mt-[1rem] cursor-pointer transition-all duration-200 hover:border-blue-400 hover:bg-blue-50 active:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
      <FieldContent className="gap-0">
        <FieldLabel htmlFor={id} className="mt-[-0.25rem]">{getCapitalized(name)}</FieldLabel>
        <FieldDescription className="text-[0.75em]">
          {description}
        </FieldDescription> 
      </FieldContent>
    </Field> 
  );
}

function CheckboxFieldGroup() {
  return(
    <FieldSet className="flex flex-col gap-5">
      <FieldLegend>
        Escoge los temas a incluir en tu prueba:
      </FieldLegend>
      <FieldGroup className="gap-5">
      {themes.map((theme, i) => <CheckboxField key={`check-${i}`} theme={theme} />)}
      </FieldGroup>
    </FieldSet>
  );
}

function ErrorAlertDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button name="error-button" variant="outline" className="hidden"></Button>
      </AlertDialogTrigger>
      <AlertDialogOverlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-300">
        <AlertDialogContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-300">
          <AlertDialogHeader>
            <AlertDialogTitle>Ha ocurrido un error</AlertDialogTitle>
            <AlertDialogDescription>
              Por favor, seleccione al menos un tipo de ejercicio antes de generar su prueba
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction variant="outline" className="cursor-pointer">Ok</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

interface ExerciseCardProps {
  theme: string;
  image: ImageAsset;
  number: number;
}

function ExerciseCard({ theme, image, number }: ExerciseCardProps) {

  const badgeTheme = getCapitalized(theme);

  return(
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image.src}
        alt={"ejercicio-" + number}
        className="relative z-20 aspect-video w-full object-fill dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{badgeTheme}</Badge>
        </CardAction>
        <CardTitle>{"Ejercicio #" + number}</CardTitle>
        <CardDescription>
          {themes.find(found => found.name === theme)?.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

interface ExercisesProps {
  exercises: Exercise[];
}

function Exercises({ exercises }: ExercisesProps) {
  return (
    <div className="flex flex-col gap-10 mt-5">
      {exercises.map(({ theme, image }, i) => (<ExerciseCard key={`exercise-${i}`} theme={theme} image={image} number={i+1}/>))}
    </div>
  );
}

function getRandomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

export default function App() {
  const [clicked, setClickStatus] = useState<boolean>(false);
  const [exercises, setExersices] = useState<Exercise[]>([]);
  const [shouldShowError, setErrorStatus] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const elements = form.elements;

    const chosenThemes = themes.filter(({name}, i) => {
      const checkbox = elements.namedItem(getCheckboxId(name)) as HTMLInputElement;
      const checked = checkbox.dataset.state === "checked";

      return checked;
    });

    const numberOfThemes = chosenThemes.length

    if (numberOfThemes === 0) {
      const button = elements.namedItem("error-button") as HTMLInputElement; 
      button.click();
      return;
    }

    const totalNumberOfExercises = 6;
    const numberOfExercisesPerTheme = totalNumberOfExercises / numberOfThemes;

    const generatedExercises: ExerciseClass[] = [];

    chosenThemes.map(theme => {
      const allImages = theme.images;
      const totalNumberOfImages = allImages.length;

      const includedExercises = generatedExercises.filter(exercise => exercise.theme === theme.name);

      const includedIndexes = includedExercises.map(exercise => exercise.index)

      const allIndixes = Array.from(allImages, (_, i) => i);

      const availableIndixes = allIndixes.filter(i => !includedIndexes.includes(i)); 

      const randomIndexes = Array.from({ length: numberOfExercisesPerTheme }, () => {
        const randomAvailableIndex = getRandomIndex(availableIndixes.length);
        const selectedIndex = availableIndixes[randomAvailableIndex];

        availableIndixes.splice(randomAvailableIndex, 1);

        return selectedIndex;
      });

      randomIndexes.map(i => {
        const exercise = new ExerciseClass(allImages[i], theme.name, i);
        generatedExercises.push(exercise);
      });
    });

    setExersices(generatedExercises);
    setClickStatus(true);
  };

  return (
    <div className="gray flex flex-col min-h-screen p-12 items-center font-sans">
      <form onSubmit={handleSubmit} className="flex flex-col max-w-[1000px] gap-4">
        <CheckboxFieldGroup /> 
        <Button type="submit" className="cursor-pointer transition-all duration-125 hover:shadow-lg hover:shadow-blue-500/20 active:shadow-none active:translate-y-0.5" variant="outline">Generar</Button> 
        <ErrorAlertDialog /> 
        { clicked && (<Exercises exercises={exercises} />)}
      </form>
    </div>
  );
}
