const input = `3,5,2,5,4,3,2,2,3,5,2,3,2,2,2,2,3,5,3,5,5,2,2,3,4,2,3,5,5,3,3,5,2,4,5,4,3,5,3,2,5,4,1,1,1,5,1,4,1,4,3,5,2,3,2,2,2,5,2,1,2,2,2,2,3,4,5,2,5,4,1,3,1,5,5,5,3,5,3,1,5,4,2,5,3,3,5,5,5,3,2,2,1,1,3,2,1,2,2,4,3,4,1,3,4,1,2,2,4,1,3,1,4,3,3,1,2,3,1,3,4,1,1,2,5,1,2,1,2,4,1,3,2,1,1,2,4,3,5,1,3,2,1,3,2,3,4,5,5,4,1,3,4,1,2,3,5,2,3,5,2,1,1,5,5,4,4,4,5,3,3,2,5,4,4,1,5,1,5,5,5,2,2,1,2,4,5,1,2,1,4,5,4,2,4,3,2,5,2,2,1,4,3,5,4,2,1,1,5,1,4,5,1,2,5,5,1,4,1,1,4,5,2,5,3,1,4,5,2,1,3,1,3,3,5,5,1,4,1,3,2,2,3,5,4,3,2,5,1,1,1,2,2,5,3,4,2,1,3,2,5,3,2,2,3,5,2,1,4,5,4,4,5,5,3,3,5,4,5,5,4,3,5,3,5,3,1,3,2,2,1,4,4,5,2,2,4,2,1,4`;

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
