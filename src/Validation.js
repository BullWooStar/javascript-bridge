const Validation = {
  validateBridgeSize(answer) {
    if (answer < 3 || answer > 20) {
      throw "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";
    }
  },
  validateInputMoving(answer) {
    if (!["U", "D"].includes(answer)) {
      throw error;
    }
  },
  validateInputGameCommand(answer) {
    if (!["R", "Q"].includes(answer)) {
      throw "[ERROR] R이나 Q 중에 하나를 선택하세요";
    }
  },
};

module.exports = Validation;
