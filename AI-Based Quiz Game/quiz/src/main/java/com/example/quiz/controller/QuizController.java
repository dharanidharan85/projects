package com.example.quiz.controller;

import com.example.quiz.model.QuestionDTO;
import com.example.quiz.service.QuizService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quiz")
@CrossOrigin(origins = "http://localhost:5173") // Allow React frontend to access
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping
    public List<QuestionDTO> getQuizQuestions(@RequestParam(defaultValue = "easy") String difficulty) {
        return quizService.fetchQuizQuestions(difficulty);
    }
}
