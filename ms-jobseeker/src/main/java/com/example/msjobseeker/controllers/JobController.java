package com.example.msjobseeker.controllers;


import com.example.msjobseeker.entities.Job;
import com.example.msjobseeker.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("msjobseeker/Jobs")
@CrossOrigin
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping("/all")
    public Iterable<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    //not working





    @GetMapping("/{jobId}")
    public Job getJobById(@PathVariable Long jobId) {
        return jobService.getJobById(jobId);
    }




    @GetMapping("/job/{title}")
    public List<Job> getJobByTitle(@PathVariable String title) {
        return jobService.getJobByTitle(title);
    }

//    @GetMapping("/job/salary/{salary}")
//    public List<Job> getJobBySalary(@PathVariable double salary) {
//        return jobService.getJobBySalary(salary);
//    }


    @GetMapping("/job/{ville}")
    public List<Job> getJobByLocation(@PathVariable String ville) {
        return jobService.getJobByLocation(ville);
    }

    @GetMapping("/job/betweensalary/{minSalary}/{maxSalary}")
    public List<Job> getJobBySalaryBetween(@PathVariable double minSalary, @PathVariable double maxSalary) {
        return jobService.getJobBySalary(minSalary, maxSalary);
    }

    @GetMapping("/job/salary/{minSalary}")
    public List<Job> getJobBySalaryGreaterThan(@PathVariable double minSalary) {
        return jobService.getJobBySalaryGreaterThan(minSalary);
    }

    @GetMapping("/job/maxduree/{maxDuration}")
    public List<Job> getJobByDurationLessThan(@PathVariable String maxDuration) {
        return jobService.findJobByDurationLess(maxDuration);
    }

    @GetMapping("/job/minduree/{minDuration}")
    public List<Job> getJobByDurationGreaterThan(@PathVariable String minDuration) {
        return jobService.findJobByDurationGreaterThan(minDuration);
    }

    @GetMapping("/job/duree/{minDuration}/{maxDuration}")
    public List<Job> getJobByDurationBetween(@PathVariable String minDuration, @PathVariable String maxDuration) {
        return jobService.findJobByDurationBetween(minDuration, maxDuration);
    }


    @GetMapping("/countjob")
    public Long countJob() {
        return jobService.countJob();
    }

}
