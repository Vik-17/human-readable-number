module.exports = function toReadable(number) {
    const numbers = [
        {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            0: "",
        },
        {
            1: "ten",
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety",
            0: "",
        },
        {
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        },
    ];

    let result = [];
    if (number === 0) {
        return "zero";
    }
    let tmp = String(number).split("");
    if (number % 100 === 0) {
        result.push(numbers[0][tmp[0]]);
        result.push("hundred");
        return result
            .filter((ele) => ele.length > 1)
            .join(" ")
            .trim();
    }
    if (tmp.length === 1) {
        return numbers[0][tmp[0]];
    } else if (tmp.length === 2 && tmp[0] === "1") {
        return numbers[2][Number(tmp.join(""))];
    } else if (tmp.length === 3 && tmp[1] === "1") {
        let tmp_x = tmp[1] + tmp[2];
        result.push(numbers[0][tmp[0]]);
        result.push("hundred");
        result.push(numbers[2][tmp_x]);
        return result
            .filter((ele) => ele.length > 1)
            .join(" ")
            .trim();
    } else if (tmp.length === 2) {
        result.push(numbers[1][tmp[0]]);
        result.push(numbers[0][tmp[1]]);
        return result
            .filter((ele) => ele.length > 1)
            .join(" ")
            .trim();
    } else if (tmp.length === 3) {
        result.push(numbers[0][tmp[0]]);
        result.push("hundred");
        result.push(numbers[1][tmp[1]]);
        result.push(numbers[0][tmp[2]]);
        return result
            .filter((ele) => ele.length > 1)
            .join(" ")
            .trim();
    }
};
