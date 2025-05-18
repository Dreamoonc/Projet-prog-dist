package com.example.msjobseeker.services;



import com.example.msjobseeker.Repositories.JobRepositories;
import com.example.msjobseeker.entities.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    @Autowired
    JobRepositories jobRepositories;





    public Iterable<Job> getAllJobs() {
        return jobRepositories.findAll();
    }

    public Job getJobById(Long id) {
        return jobRepositories.findById(id).orElseThrow(() -> new RuntimeException("Job not found"));
    }











    public List<Job> getJobByTitle(String title) {
        return jobRepositories.findJobByTitle(title);
    }


    public List<Job> getJobByLocation(String ville) {
        return jobRepositories.findJobByLocationVille(ville);
    }

    public List<Job> getJobBySalary(Double minsalary, Double maxsalary) {
        return jobRepositories.findJobBySalaryBetween(minsalary, maxsalary);
    }

    public List<Job> getJobBySalaryGreaterThan(Double minsalary) {
        return jobRepositories.findJobBySalaryGreaterThan(minsalary);
    }

    public List<Job> findJobByDurationLess(String minDuration) {
        return jobRepositories.findJobByDurationLess(minDuration);
    }

    public List<Job> findJobByDurationGreaterThan(String maxDuration) {
        return jobRepositories.findJobByDurationMore(maxDuration);
    }

    public List<Job> findJobByDurationBetween(String minDuration, String maxDuration) {
        return jobRepositories.findJobByDurationBetween(minDuration, maxDuration);
    }


    public Long countJob() {
        return jobRepositories.countJob();
    }




}
