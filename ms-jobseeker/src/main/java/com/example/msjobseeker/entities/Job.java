package com.example.msjobseeker.entities;



import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Job {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long idJob;
        private String title;
        private String description;
        private Adresse location;
        private int minAge;
        private int maxAge;



        private Date jobPublishedDate;
        private Date jobExpiredDate;

        private String EducationLevel;


        private String jobTime;

        private Boolean teamWork;



        private String Languages;

        private double Salary;

        private String Duration;
        private String company;
        private String companySize;



}
