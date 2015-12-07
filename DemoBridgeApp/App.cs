namespace DemoBridgeApp
{
    using Bridge;
    using Bridge.Html5;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;

    public class App
    {
        [Ready]
        public static void Main()
        {
            // Simple alert() to confirm it's working
            //Global.Alert("Success");

            //Test linq queries by simple variable...
            string[] names = { "Daniil", "Fabricio", "Geoffrey", "Leonid", "Ozgur" };
            IEnumerable query = names
                .Where(n => n.Contains("i"))
                .OrderBy(n => n)
                .Select(n => n.ToUpperCase());

            foreach (string q in query)
            {
                Console.WriteLine(q);
            }

            //test linq with objects...
            var queryPlants = Plants.Flowers.GroupBy(flower => flower.Light);
            foreach (var item in queryPlants)
            {
                Console.WriteLine("Light: " + item.Key);

                foreach (Plant p in item)
                {
                    Console.WriteLine("    - " + p.Common);
                }
            }


        }


        public class Plant
        {
            public string Common { get; set; }
            public string Light { get; set; }
            public bool Indoor { get; set; }
        }

        public class Plants
        {
            public static List<Plant> Flowers
            {
                get
                {
                    return new List<Plant>
                {
                    new Plant {
                        Common = "Anemone",
                        Light = "Shade",
                        Indoor = true
                    },

                    new Plant {
                        Common = "Columbine",
                        Light = "Shade",
                        Indoor = true
                    },

                    new Plant {
                        Common = "Marsh Marigold",
                        Light = "Sunny",
                        Indoor = false
                    },

                    new Plant {
                        Common = "Gential",
                        Light = "Sun or Shade",
                        Indoor = false
                    },

                    new Plant {
                        Common = "Woodland",
                        Light = "Sun or Shade",
                        Indoor = false
                    }
                };
                }
            }
        }

    }
}