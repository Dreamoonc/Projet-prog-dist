package com.example.msjobseeker.entities;

import com.example.msjobseeker.enums.CompetenceNom;
import com.example.msjobseeker.enums.StatusDemandeEmploi;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;


import javax.persistence.*;
import java.time.Year;
import java.util.Date;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DemandeEmploi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDemande;

    // Rest of the fields and mappings

//    public DemandeEmploi() {
//        this.idDemande = generateUniqueId();
//    }
//
//    private static final AtomicLong idCounter = new AtomicLong();
//
//    private Long generateUniqueId() {
//        return idCounter.incrementAndGet();
//    }
    private Date date;
    private String cv;
    @ElementCollection
    private List<CompetenceNom> skills;
    private String lettreDeMotivation;
    @Enumerated(EnumType.STRING)
    private StatusDemandeEmploi status;

    private String DemandeurEmail;


    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "idDemandeur", nullable = false)
    private Demandeur demandeur;




    private Long idjob;

}
