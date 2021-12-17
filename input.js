const input = `target area: x=217..240, y=-126..-69`;

exports.module = {
  pure: input,
  inputNums: input.split(/\n/).map((num) => parseInt(num)),
  inputFloats: input.split(/\n/).map((num) => parseFloat(num)),
  inputText: input.split(/\n/),
};