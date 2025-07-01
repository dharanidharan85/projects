package com.example.quiz.service;

import com.example.quiz.model.QuestionDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class QuizService {
    public List<QuestionDTO> fetchQuizQuestions(String difficulty) {
        String url = "https://opentdb.com/api.php?amount=5&difficulty=" + difficulty + "&type=multiple";

        RestTemplate restTemplate = new RestTemplate();
        Map<String, Object> response = restTemplate.getForObject(url, Map.class);

        List<Map<String, Object>> results = (List<Map<String, Object>>) response.get("results");

        List<QuestionDTO> questions = new ArrayList<>();

        for (Map<String, Object> item : results) {
            QuestionDTO q = new QuestionDTO();
            q.setQuestion((String) item.get("question"));

            List<String> options = new ArrayList<>();
            options.add((String) item.get("correct_answer"));
            options.addAll((List<String>) item.get("incorrect_answers"));
            Collections.shuffle(options); // Shuffle to randomize answer position

            q.setOptions(options);
            q.setCorrectAnswer((String) item.get("correct_answer"));

            questions.add(q);
        }

        return questions;
    }

}
