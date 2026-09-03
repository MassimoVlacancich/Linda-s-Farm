import StringLights from "@/components/StringLights";
import FoodStallCard from "@/components/FoodStallCard";
import { FOOD_STALLS } from "@/lib/festival-data";

export default function FoodPage() {
  return (
    <div>
      <section className="bg-dusk text-cream-light py-14">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h1 className="font-display text-4xl">Food</h1>
          <p className="mt-2 text-cream-light/75">
            Mostly organic, mostly from the farm itself, all served from cosy little
            wagons dotted around the site.
          </p>
        </div>
        <StringLights className="mt-8" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FOOD_STALLS.map((stall) => (
            <FoodStallCard key={stall.name} stall={stall} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-moss/25 bg-moss/10 p-6 text-sm text-bark/80 leading-relaxed">
          <p>
            Most stalls source directly from the surrounding farms — organic where we
            can manage it, and always happy to point you to something vegan or
            gluten-free if you ask. Bring your own mug to the tea points and we&apos;ll
            happily fill it for less.
          </p>
        </div>
      </section>
    </div>
  );
}
