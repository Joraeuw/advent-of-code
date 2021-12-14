const input = `VOKKVSKKPSBVOOKVCFOV

PK -> P
BB -> V
SO -> O
OO -> V
PV -> O
CB -> H
FH -> F
SC -> F
KF -> C
VS -> O
VP -> V
FS -> K
SP -> C
FC -> N
CF -> C
BF -> V
FN -> K
NH -> F
OB -> F
SV -> H
BN -> N
OK -> K
NF -> S
OH -> S
FV -> B
OC -> F
VF -> V
HO -> H
PS -> N
NB -> N
NS -> B
OS -> P
CS -> S
CH -> N
PC -> N
BH -> F
HP -> P
HH -> V
BK -> H
HC -> B
NK -> S
SB -> C
NO -> K
SN -> H
VV -> N
ON -> P
VN -> H
VB -> P
BV -> O
CV -> N
HV -> C
SH -> C
KV -> F
BC -> O
OF -> P
NN -> C
KN -> F
CO -> C
HN -> P
PP -> V
FP -> O
CP -> S
FB -> F
CN -> S
VC -> C
PF -> F
PO -> B
KB -> H
HF -> P
SK -> P
SF -> H
VO -> N
HK -> C
HB -> C
OP -> B
SS -> V
NV -> O
KS -> N
PH -> H
KK -> B
HS -> S
PN -> F
OV -> S
PB -> S
NC -> B
BS -> N
KP -> C
FO -> B
FK -> N
BP -> C
NP -> C
KO -> C
VK -> K
FF -> C
VH -> H
CC -> F
BO -> S
KH -> B
CK -> K
KC -> C`;
exports.module = {
  pure: input,
  inputNums: input.split(/\n/).map((num) => parseInt(num)),
  inputFloats: input.split(/\n/).map((num) => parseFloat(num)),
  inputText: input.split(/\n/),
};

const conditionalArraySplit = (array, condition) => {
  let trueArray = [];
  let falseArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (condition(element)) trueArray.push(element);
    else falseArray.push(element);

    return [trueArray, falseArray];
  }
};
//const [trueArray, falseArray] = conditionalArraySplit(input, (element) => {});

/*using System;
using System.Linq;

namespace Varna2021
{
    class Program
    {
        static void Main(string[] args)
        {
            int countOfPears = Convert.ToInt32(Console.ReadLine());
            int[] nums = new int[countOfPears];
            for (int i = 0; i < countOfPears; i++)
            {
                nums[i] = Convert.ToInt32(Console.ReadLine());
            }

            long lcm = calcLCM(nums);

            Console.WriteLine(lcm);
        }

        public static int calcLCM(int[] arr)
        {
            int LCM = 1;
            int divisor = 2;

            while (true)
            {
                int counter = 0;
                bool divisible = false;

                for (int i = 0; i < arr.Length; i++)
                {
                    if (arr[i] == 0)
                    {
                        return 0;
                    }
                    else if (arr[i] < 0)
                    {
                        arr[i] = arr[i] * (-1);
                    }
                    if (arr[i] == 1)
                    {
                        counter++;
                    }
                    if (arr[i] % divisor == 0)
                    {
                        divisible = true;
                        arr[i] = arr[i] / divisor;
                    }
                }

                if (divisible)
                {
                    LCM = LCM * divisor;
                }
                else
                {
                    divisor++;
                }
                if (counter == arr.Length)
                {
                    return LCM;
                }
            }
        }

    }
}
*/
/*using System;
using System.Linq;

namespace Varna2021
{
    class Program
    {
        static void Main(string[] args)
        {
            int count = 0;

            int n = Convert.ToInt32(Console.ReadLine());
            Int64[] nums = new Int64[n];

            for (int i = 0; i < n; i++)
                nums[i] = Convert.ToInt64(Console.ReadLine());


            for (int i = 0; i < nums.Length; i++)
            {
                count += checkSum(nums, n, nums[i], 0);
            }
            Console.WriteLine(count);
        }

        static int checkSum(Int64[] arr, int size, long sum, int startIndex)
        {
            int count = 0;
            for (int i = startIndex; i < (size - 1); i++)
            {
                for (int j = (i + 1); j < size; j++)
                {
                    if (arr[i] + arr[j] == sum)
                    {
                        count++;
                    }
                }
            }

            return count;
        }

    }
}*/
