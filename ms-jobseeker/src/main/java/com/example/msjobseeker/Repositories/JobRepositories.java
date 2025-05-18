package com.example.msjobseeker.Repositories;


import com.example.msjobseeker.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface JobRepositories extends JpaRepository<Job,Long>, JpaSpecificationExecutor<Job> {





   public List<Job> findJobByTitle(String title);









    @Query("select j from Job j where j.Salary>=:minSalary and j.Salary<=:maxSalary")
    public List<Job> findJobBySalaryBetween(Double minSalary,Double maxSalary);

    @Query("select j from Job j where j.location.ville=:ville")
    public List<Job> findJobByLocationVille(String  ville);

    @Query("select j from Job j where j.Salary>=:theSalary")
    public List<Job> findJobBySalaryGreaterThan(Double theSalary);

    @Query("select j from Job j where j.Duration<=:minDuration")
    public List<Job> findJobByDurationLess(String minDuration);

    @Query("select j from Job j where j.Duration>=:maxDuration")
    public List<Job> findJobByDurationMore(String maxDuration);

    @Query("select j from Job j where j.Duration>=:minDuration and j.Duration<=:maxDuration")
    public List<Job> findJobByDurationBetween(String minDuration,String maxDuration);

   @Query("select count(j) from Job j")
   Long countJob();






    @Query("SELECT COUNT(j) FROM Job j WHERE MONTH(j.jobPublishedDate) = :month")
    Long countJobsByMonth(@Param("month") int month);


}
